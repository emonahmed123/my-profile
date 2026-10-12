/**
 * UI click sounds, synthesised with the Web Audio API — no audio files.
 * Browser-only: call from event handlers or effects, never during render.
 */

const STORAGE_KEY = "sound";
const CHANGE_EVENT = "sound-change";

/** C-major pentatonic, C5 → A6 — any run of notes stays consonant. */
const SCALE = [
  523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51, 1567.98, 1760,
];

/** [frequency ratio, peak gain, decay seconds] — fundamental plus overtones. */
const PARTIALS = [
  [1, 0.2, 1.2],
  [2, 0.08, 0.7],
  [3, 0.03, 0.4],
] as const;

let ctx: AudioContext | null = null;
let master: GainNode | null = null;

function output() {
  if (!ctx || !master) {
    ctx = new AudioContext();
    master = ctx.createGain();
    master.gain.value = 0.25;
    // roll off the top end so overtones stay soft
    const tone = ctx.createBiquadFilter();
    tone.type = "lowpass";
    tone.frequency.value = 3000;
    master.connect(tone).connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return { ctx, master };
}

/** A soft bell: sine partials with a fast attack and exponential decay. */
function bell(frequency: number, delay = 0, level = 1) {
  const { ctx, master } = output();
  const start = ctx.currentTime + delay;

  for (const [ratio, gain, decay] of PARTIALS) {
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = frequency * ratio;
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(gain * level, start + 0.01);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + decay);
    osc.connect(amp).connect(master);
    osc.start(start);
    osc.stop(start + decay + 0.05);
  }
}

export function isSoundOn() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
}

export function setSoundOn(on: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY, on ? "on" : "off");
  } catch {}
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** `useSyncExternalStore` subscriber — also syncs other tabs. */
export function subscribeSound(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Plays scale step `step` (wraps around) if sound is on. */
export function playNote(step: number) {
  if (!isSoundOn()) return;
  const n = SCALE.length;
  try {
    bell(SCALE[((step % n) + n) % n]);
  } catch {}
}

/** Rising three-note chime — confirms sound was switched on. */
export function playChime() {
  try {
    bell(SCALE[2], 0, 0.6);
    bell(SCALE[4], 0.07, 0.6);
    bell(SCALE[7], 0.14, 0.6);
  } catch {}
}
