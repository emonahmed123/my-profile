import { ArrowUp } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

/** DESIGN.md `footer` — one slim full-bleed ink bar: mark, credit, back-to-top. */
export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-ink text-canvas-soft", className)}>
      <div className="mx-auto flex w-full max-w-[96rem] flex-col items-center gap-4 px-8 py-6 text-center md:flex-row md:justify-between md:px-14 md:text-left">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-sm bg-primary text-caption font-semibold text-on-primary">
            EA
          </span>
          <span className="text-body-sm font-semibold uppercase tracking-widest">
            Emon Ahmed
          </span>
        </Link>

        <p className="text-body-sm text-canvas-soft/50">
          Designed &amp; developed by Emon Ahmed © {new Date().getFullYear()} —
          All rights reserved
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-canvas-soft transition-colors hover:text-primary"
        >
          Back to top
          <ArrowUp aria-hidden className="size-4" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
