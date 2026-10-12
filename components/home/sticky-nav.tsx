"use client";

import { useSyncExternalStore, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Scroll distance (px) after which the bar pins to the viewport. */
const PIN_AFTER = 120;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const isPinned = () => window.scrollY > PIN_AFTER;

interface StickyNavProps {
  children: ReactNode;
  className?: string;
}

/**
 * Holds the navbar's slot in the hero, then pins it to the top of the viewport
 * once scrolled. `position: fixed` escapes the hero's `overflow-hidden`, which
 * would otherwise defeat `sticky`.
 */
export function StickyNav({ children, className }: StickyNavProps) {
  const pinned = useSyncExternalStore(subscribe, isPinned, () => false);

  return (
    // keeps the hero layout from jumping when the bar leaves the flow
    <header className={cn("relative z-50 h-18 md:h-22", className)}>
      <div
        data-pinned={pinned}
        className={cn(
          "group inset-x-0",
          pinned
            ? "fixed top-3 px-4 duration-300 animate-in fade-in slide-in-from-top-4 md:px-6 motion-reduce:animate-none"
            : "absolute top-0",
        )}
      >
        {/* pinned: a floating card inset from the viewport edges */}
        <div
          className={cn(
            pinned &&
              "mx-auto max-w-[96rem] rounded-xl border border-border-soft bg-canvas shadow-lg shadow-ink/5",
          )}
        >
          {children}
        </div>
      </div>
    </header>
  );
}

export default StickyNav;
