import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

const TONES = {
  /** the reference frame — negative red handles */
  alert: "bg-negative",
  /** on-brand variant — Wise green handles */
  brand: "bg-primary",
  ink: "bg-ink",
} as const;

/** the four handle positions, each centred on its corner */
const CORNERS: ((offset: number) => CSSProperties)[] = [
  (o) => ({ top: o, left: o }),
  (o) => ({ top: o, right: o }),
  (o) => ({ bottom: o, left: o }),
  (o) => ({ bottom: o, right: o }),
];

interface DesignFrameProps {
  children: ReactNode;
  className?: string;
  /** handle + rail color */
  tone?: keyof typeof TONES;
  /** hairline utility for the frame edge */
  edgeClassName?: string;
  /** square handle edge length, in px */
  handleSize?: number;
  /** tone-colored vertical rails on the left/right edges */
  rails?: boolean;
}

/**
 * Artboard selection frame — a hairline box with square corner handles, the way
 * a design tool draws a selected frame. Level 1 elevation (DESIGN.md) plus the
 * handles; wraps any content and never clips it.
 */
export function DesignFrame({
  children,
  className,
  tone = "brand",
  edgeClassName = "border-border-soft",
  handleSize = 10,
  rails = true,
}: DesignFrameProps) {
  const toneBg = TONES[tone];
  const offset = -handleSize / 2;

  return (
    <div className={cn("relative border", edgeClassName, className)}>
      {rails && (
        <>
          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 -left-px w-px opacity-70",
              toneBg,
            )}
          />
          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 -right-px w-px opacity-70",
              toneBg,
            )}
          />
        </>
      )}

      {CORNERS.map((position, i) => (
        <span
          key={i}
          aria-hidden
          className={cn("pointer-events-none absolute z-20", toneBg)}
          style={{ width: handleSize, height: handleSize, ...position(offset) }}
        />
      ))}

      {children}
    </div>
  );
}

export default DesignFrame;
