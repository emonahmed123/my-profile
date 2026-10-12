"use client";

import { useEffect } from "react";

import { playNote } from "@/lib/sound";

const CLICKABLE = 'a[href], button:not(:disabled), [role="button"], summary';

/** Default step for clickables outside a list. */
const DEFAULT_STEP = 2;

/**
 * Plays a soft note on every link / button click. The note climbs with the
 * item's position in its list, so a row of links plays a scale. Override with
 * `data-note="<step>"`; silence a subtree with `data-sound="off"`.
 */
export function ClickSounds() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest(CLICKABLE);
      if (!target || target.closest("[data-sound='off']")) return;

      const explicit = target.closest<HTMLElement>("[data-note]")?.dataset.note;
      if (explicit !== undefined) return playNote(Number(explicit));

      const item = target.closest("li");
      const siblings = item?.parentElement?.children;
      playNote(
        item && siblings ? Array.from(siblings).indexOf(item) : DEFAULT_STEP,
      );
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

export default ClickSounds;
