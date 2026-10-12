import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface Role {
  role: string;
  company: string;
  /** square mark under `public/`; falls back to initials */
  logo?: string;
  href?: string;
  type?: string;
  location?: string;
  /** `YYYY-MM` */
  start: string;
  /** `YYYY-MM`; omit for the current role */
  end?: string;
  summary?: string;
  highlights?: string[];
  tech?: string[];
}

/** Newest first. */
export const ROLES: Role[] = [
  {
    role: "Frontend Developer",
    company: "Vzure Solution",
    logo: "/assets/images/companies/vzure.png",
    start: "2025-11",
    summary:
      "Frontend engineering on Next.js products and private AI projects, with a focus on speed and a smoother user experience.",
    highlights: [
      "Optimised and refactored the Next.js codebase, improving performance across key pages.",
      "Building interfaces for private, client-confidential AI projects.",
      "Built visual workflow editors with React Flow and shadcn/ui, making complex flows easier to set up and follow.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "React Flow",
      "shadcn/ui",
      "Tailwind CSS",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "UiHut",
    logo: "/assets/images/companies/uihut.png",
    href: "https://uihut.com",
    type: "Internship",
    start: "2023-09",
    end: "2023-12",
    highlights: [
      "Implemented UI optimisation, clean code and caching strategies on every theme, resulting in lightning-fast load times.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    role: "Theme Developer",
    company: "SwipePages",
    logo: "/assets/images/companies/swipepages.png",
    href: "https://swipepages.com",
    start: "2023-05",
    end: "2023-08",
    highlights: [
      "Collaborated with Figma designers to adapt complex elements and refine landing-page designs for the SwipePages drag-and-drop builder.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
  },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatMonth(value: string) {
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

function toInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

interface ExperienceProps {
  className?: string;
}

/** Experience band — sticky intro beside a newest-first role timeline. */
export function Experience({ className }: ExperienceProps) {
  return (
    <section
      id="impact"
      aria-labelledby="experience-heading"
      className={cn("scroll-mt-16 px-4 py-6 md:px-6 md:py-10", className)}
    >
      <div className="mx-auto grid w-full max-w-[96rem] gap-12 px-4 py-12 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16 lg:py-16">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <h2
            id="experience-heading"
            className="font-display text-display-md leading-tight text-ink lg:text-display-xl lg:leading-[1.02]"
          >
            Experience
          </h2>
          <p className="mt-6 max-w-sm text-body-md text-body">
            Frontend roles where I turned designs into fast, maintainable
            interfaces — from landing-page themes to production apps.
          </p>
        </div>

        <ol className="relative">
          {/* timeline rail, running behind the logo column */}
          <span
            aria-hidden
            className="absolute inset-y-6 left-6 w-px bg-border-soft"
          />

          {ROLES.map((item) => {
            const current = !item.end;
            const meta = [item.type, item.location].filter(Boolean);

            return (
              <li
                key={`${item.company}-${item.start}`}
                className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 pb-12 last:pb-0 md:gap-x-8"
              >
                <span
                  aria-hidden
                  className={cn(
                    "relative grid size-12 place-items-center overflow-hidden rounded-lg text-body-sm font-semibold ring-8 ring-background",
                    item.logo
                      ? "border border-border-soft bg-canvas"
                      : current
                        ? "bg-primary text-on-primary"
                        : "bg-canvas-soft text-ink",
                  )}
                >
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  ) : (
                    toInitials(item.company)
                  )}
                </span>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-display-xs text-ink">{item.role}</h3>
                    <p className="text-body-sm tabular-nums text-mute">
                      <time dateTime={item.start}>
                        {formatMonth(item.start)}
                      </time>
                      {" – "}
                      {item.end ? (
                        <time dateTime={item.end}>{formatMonth(item.end)}</time>
                      ) : (
                        "Present"
                      )}
                    </p>
                  </div>

                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-body-sm text-body">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 font-semibold text-ink underline-offset-4 hover:underline"
                      >
                        {item.company}
                        <ArrowUpRight aria-hidden className="size-3.5" />
                      </a>
                    ) : (
                      <span className="font-semibold text-ink">
                        {item.company}
                      </span>
                    )}
                    {meta.map((m) => (
                      <span key={m}>· {m}</span>
                    ))}
                    {current && (
                      <span className="ml-1 rounded-pill bg-primary-pale px-2.5 py-0.5 text-caption font-semibold text-positive-deep">
                        Current
                      </span>
                    )}
                  </p>

                  {item.summary && (
                    <p className="mt-4 max-w-2xl text-body-md text-body">
                      {item.summary}
                    </p>
                  )}

                  {item.highlights && (
                    <ul className="mt-4 max-w-2xl space-y-2">
                      {item.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-body-md text-body"
                        >
                          {/* square bullet echoes the design-frame handles */}
                          <span
                            aria-hidden
                            className="mt-2.5 size-1.5 shrink-0 bg-primary"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tech && (
                    <ul
                      aria-label={`${item.company} tech`}
                      className="mt-5 flex flex-wrap gap-1.5"
                    >
                      {item.tech.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-sm border border-border-soft px-2 py-0.5 text-caption text-body"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
