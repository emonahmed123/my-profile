"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Phase = "cover" | "exit" | "done";

interface PreloaderStairsProps {
  /** vertical panels making up the curtain */
  columns?: number;
  /** ms the full cover is held before the stairs retract */
  hold?: number;
  /** ms one panel takes to retract */
  duration?: number;
  /** ms between neighbouring panels — the stair step */
  stagger?: number;
  /** monogram in the lime square */
  initials?: string;
  label?: string;
  className?: string;
  onDone?: () => void;
}

/**
 * Double-stairs preloader — an ink curtain of panels that retracts in two
 * counter-running staircases: even panels lift to the top, odd panels drop to
 * the bottom, each one step behind its neighbour. CSS transitions only, no
 * animation library. Unmounts itself when the reveal finishes.
 */
export function PreloaderStairs({
  columns = 10,
  hold = 900,
  duration = 700,
  stagger = 90,
  initials = "EA",
  label = "Emon Ahmed",
  className,
  onDone,
}: PreloaderStairsProps) {
  const [phase, setPhase] = useState<Phase>("cover");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    if (reduced) {
      setPhase("done");
      onDone?.();
      return;
    }

    const reveal = (columns - 1) * stagger + duration;
    const timers = [
      setTimeout(() => setPhase("exit"), hold),
      setTimeout(() => {
        setPhase("done");
        onDone?.();
      }, hold + reveal),
    ];

    return () => timers.forEach(clearTimeout);
  }, [columns, duration, hold, onDone, stagger]);

  // hold the page still while the curtain is up
  useEffect(() => {
    if (phase === "done") return;

    const { style } = document.documentElement;
    const previous = style.overflow;
    style.overflow = "hidden";

    return () => {
      style.overflow = previous;
    };
  }, [phase]);

  if (phase === "done") return null;

  const exiting = phase === "exit";

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 overflow-hidden",
        exiting && "pointer-events-none",
        className,
      )}
    >
      <p className="sr-only" role="status">
        Loading
      </p>

      {Array.from({ length: columns }, (_, i) => {
        const fromTop = i % 2 === 0;
        // even panels step left → right, odd panels right → left
        const step = fromTop ? i : columns - 1 - i;

        return (
          <span
            key={i}
            aria-hidden
            className="absolute inset-y-0 bg-ink transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform"
            style={{
              // +1px overlap so no hairline of page shows between panels
              left: `${(i / columns) * 100}%`,
              width: `calc(${100 / columns}% + 1px)`,
              transformOrigin: fromTop ? "top" : "bottom",
              transitionDuration: `${duration}ms`,
              transitionDelay: `${step * stagger}ms`,
              transform: exiting ? "scaleY(0)" : "scaleY(1)",
            }}
          />
        );
      })}

      <div
        aria-hidden
        className={cn(
          "absolute inset-0 grid place-items-center transition-all duration-500 ease-out",
          exiting ? "-translate-y-2 opacity-0" : "translate-y-0 opacity-100",
        )}
      >
        <span className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-sm bg-primary text-body-sm font-semibold text-on-primary">
            {initials}
          </span>
          <span className="font-display text-display-xs text-canvas-soft">
            {label}
          </span>
        </span>
      </div>
    </div>
  );
}

export default PreloaderStairs;
