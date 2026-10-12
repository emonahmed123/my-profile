"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSyncExternalStore } from "react";

import { isSoundOn, playChime, setSoundOn, subscribeSound } from "@/lib/sound";
import { cn } from "@/lib/utils";

interface SoundToggleProps {
  className?: string;
}

/** Mutes / unmutes the click sounds; the choice persists in localStorage. */
export function SoundToggle({ className }: SoundToggleProps) {
  const on = useSyncExternalStore(subscribeSound, isSoundOn, () => true);

  return (
    <button
      type="button"
      data-sound="off"
      aria-pressed={on}
      aria-label="Sound effects"
      title={on ? "Mute sounds" : "Turn sounds on"}
      onClick={() => {
        setSoundOn(!on);
        if (!on) playChime();
      }}
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-xl border border-border-soft bg-canvas text-ink transition-colors hover:bg-canvas-soft",
        className,
      )}
    >
      {on ? (
        <Volume2 aria-hidden className="size-4" />
      ) : (
        <VolumeX aria-hidden className="size-4" />
      )}
    </button>
  );
}

export default SoundToggle;
