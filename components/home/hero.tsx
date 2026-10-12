import { Download } from "lucide-react";

import Navbar from "@/components/home/navbar";
import PortraitCard from "@/components/home/portrait-card";
import DotPattern from "@/components/ui/dot-pattern-1";
import DesignFrame from "../ui/design-frame";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-6 pt-0 md:px-6 md:pb-10 md:pt-0">
      {/* ambient brand glow bleeding past the panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 size-[36rem] rounded-pill opacity-25 blur-3xl bg-[radial-gradient(circle,var(--primary)_0%,transparent_65%)]"
      />

      <div className="relative mx-auto w-full max-w-[96rem] overflow-hidden rounded-xl">
        <Navbar />

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-8">
          <div className="relative z-20 px-4 pb-10 pt-8 md:px-8 md:pb-16 lg:pb-20 lg:pt-10">
            <DesignFrame className="px-4 py-10 md:px-5 md:py-14 lg:px-5 lg:py-5">
              {/* graph-paper texture under the quote */}
              <DotPattern
                width={8}
                height={8}
                cx={1}
                cy={1}
                cr={0.6}
                className="fill-ink/15 md:fill-ink/15"
              />

              <p className="relative text-caption text-primary">I believe</p>

              <h1 className="relative max-w-[47rem] font-display text-display-md leading-[1.05] text-foreground lg:text-display-xl lg:leading-[1.02]">
                Engineering <span className="text-primary">scalable</span>{" "}
                <span className="text-primary">architecture</span> for modern{" "}
                <span className="text-primary">enterprises</span>
              </h1>
            </DesignFrame>

            <p className="mt-6 max-w-md text-body-sm text-body md:text-body-md">
              Full-Stack Web Developer specializing in high-performance React
              and Next.js applications, scalable Node.js backends, and seamless
              user experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-button-md text-on-primary transition-colors hover:bg-primary-active"
              >
                Let&apos;s Talk
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-ink bg-canvas px-6 text-button-md text-ink transition-colors hover:bg-canvas-soft"
              >
                Download Resume
                <Download className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative px-4 pb-12 pt-4 md:px-8 lg:py-10">
            <div aria-hidden className="absolute -inset-8">
              <div className="absolute inset-0 opacity-45 blur-2xl bg-[radial-gradient(60%_60%_at_58%_45%,var(--primary)_0%,transparent_70%)]" />
              <DotPattern
                width={22}
                height={22}
                cr={1.1}
                className="fill-primary/70 md:fill-primary/70 [mask-image:radial-gradient(62%_62%_at_58%_45%,black_0%,transparent_100%)]"
              />
            </div>

            <PortraitCard className="relative z-10 mx-auto w-full max-w-md lg:mr-0 lg:max-w-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
