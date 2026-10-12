import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import BrandMark from "@/components/home/brand-mark";
import DesignFrame from "@/components/ui/design-frame";
import DotPattern from "@/components/ui/dot-pattern-1";

/** Sections worth landing on instead. */
const SHORTCUTS = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#stack" },
  { label: "Experience", href: "/#impact" },
  { label: "Contact", href: "/#contact" },
];

/** 404 — the hero's frame and glow, with my face standing in for the zero. */
export default function NotFound() {
  const pageTitle = "Page not found · Emon Ahmed";

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden bg-background px-4 md:px-6">
      {/* React 19 hoists this into <head> */}
      <title>Page not found · Emon Ahmed</title>

      {/* ambient brand glow + dot texture, as on the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-pill opacity-30 blur-3xl bg-[radial-gradient(circle,var(--primary)_0%,transparent_65%)]" />
        <DotPattern
          width={22}
          height={22}
          cr={1.1}
          className="fill-primary/60 md:fill-primary/60 mask-[radial-gradient(55%_55%_at_50%_50%,black_0%,transparent_100%)]"
        />
      </div>

      <header className="relative mx-auto flex w-full max-w-[96rem] px-4 py-4 md:px-8 md:py-6">
        <BrandMark />
      </header>

      <section className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center py-12 text-center">
        <DesignFrame className="w-full bg-canvas/60 px-6 py-10 backdrop-blur-sm md:px-12 md:py-14">
          <p className="text-caption font-semibold uppercase tracking-widest text-primary">
            Error 404
          </p>

          <p
            aria-hidden
            className="mt-4 flex items-center justify-center gap-3 font-display text-display-xxl leading-none text-ink md:gap-5 md:text-display-mega"
          >
            4
            <span className="relative inline-block size-20 overflow-hidden rounded-full bg-primary ring-8 ring-primary-pale md:size-28">
              <Image
                src="/assets/images/emon-portrait.webp"
                alt=""
                fill
                sizes="7rem"
                className="scale-[1.6] object-cover object-top"
              />
            </span>
            4
          </p>

          <h1 className="mt-8 text-display-sm text-ink">
            This page took a wrong turn.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-body-md text-body">
            The link may be broken, or the page has moved. Even I couldn&apos;t
            find it — let&apos;s get you back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-button-md text-on-primary transition-colors hover:bg-primary-active"
            >
              <ArrowLeft aria-hidden className="size-4" />
              Back to home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-ink bg-canvas px-6 text-button-md text-ink transition-colors hover:bg-canvas-soft"
            >
              Report a broken link
              <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>
        </DesignFrame>

        <nav aria-label="Popular sections" className="mt-10">
          <p className="text-body-sm text-mute">Or jump straight to</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {SHORTCUTS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-pill border border-border-soft bg-canvas px-4 py-1.5 text-body-sm font-semibold text-body transition-colors hover:border-transparent hover:bg-primary-pale hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
