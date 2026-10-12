import Image from "next/image";

import { cn } from "@/lib/utils";

interface PortraitCardProps {
  className?: string;
}

/** Studio-style portrait: the cut-out photo on a soft grey backdrop drawn in CSS. */
export function PortraitCard({ className }: PortraitCardProps) {
  return (
    <figure className={cn("relative", className)}>
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-[radial-gradient(80%_60%_at_50%_30%,var(--canvas)_0%,var(--canvas-soft)_45%,color-mix(in_oklab,var(--mute)_55%,var(--canvas-soft))_100%)] shadow-xl shadow-ink/10">
        <Image
          src="/assets/images/emon-portrait.webp"
          alt="Portrait of Emon Ahmed"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 32rem"
          className="object-cover object-bottom"
        />
      </div>
    </figure>
  );
}

export default PortraitCard;
