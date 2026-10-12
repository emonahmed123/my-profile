import {
  Atom,
  Braces,
  Cloud,
  Database,
  Palette,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import DotPattern from "@/components/ui/dot-pattern-1";
import { cn } from "@/lib/utils";

/** What I lead with — the headline strengths, read before the cards. */
export const TOP_SKILLS = [
  "Product Development",
  "SaaS Development",
  "System Architecture",
  "Agentic AI Development",
  "Performance Optimization",
];

interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
  tools: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    title: "TypeScript & JavaScript",
    description:
      "Type-safe full-stack codebases with strict compiler settings and clean, shared patterns.",
    icon: Braces,
    tools: ["TypeScript", "JavaScript", "Zod"],
  },
  {
    title: "React & Next.js",
    description:
      "App Router, Server Components and streaming UIs tuned for Lighthouse 90+.",
    icon: Atom,
    tools: ["React", "Next.js", "React Native", "TanStack Query"],
  },
  {
    title: "Node.js & APIs",
    description:
      "REST and real-time services, background jobs and auth that hold up under load.",
    icon: Server,
    tools: ["Node.js", "Express", "WebSockets"],
  },
  {
    title: "Databases & ORMs",
    description:
      "Relational and document modelling, migrations, transactions and query tuning.",
    icon: Database,
    tools: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    title: "UI Systems",
    description:
      "Accessible design systems built on theme tokens and headless primitives.",
    icon: Palette,
    tools: ["Tailwind CSS", "shadcn/ui", "Radix UI"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Containerised deploys, CI/CD pipelines and cost-aware cloud infrastructure.",
    icon: Cloud,
    tools: ["Docker", "Vercel", "GitHub Actions"],
  },
  {
    title: "AI Integration",
    description:
      "LLM endpoints with structured output, tool calling and streaming responses.",
    icon: Sparkles,
    tools: ["Claude", "OpenAI", "Vercel AI SDK"],
  },
  {
    title: "Tools & Workflow",
    description: "The everyday kit for shipping fast and reviewing carefully.",
    icon: Wrench,
    tools: ["VS Code", "Git", "GitHub", "Figma"],
  },
];

/** Scrolls in the ticker under the cards. */
export const CORE_TECH = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Tailwind CSS",
  "Docker",
];

interface SkillsProps {
  className?: string;
}

/** Skills band — top-skill badges, numbered capability cards, core-tech ticker. */
export function Skills({ className }: SkillsProps) {
  return (
    <section
      id="stack"
      aria-labelledby="skills-heading"
      className={cn("scroll-mt-16 px-4 py-6 md:px-6 md:py-10", className)}
    >
      <div className="relative isolate mx-auto w-full max-w-[96rem] overflow-hidden rounded-xl bg-primary-pale px-4 py-12 md:px-8 lg:py-16">
        {/* hero's lime glow + dot texture, so the band reads as the same brand surface */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-48 size-[40rem] rounded-pill opacity-60 blur-3xl bg-[radial-gradient(circle,var(--primary)_0%,transparent_65%)]" />
          <DotPattern
            width={22}
            height={22}
            cr={1.1}
            className="fill-primary md:fill-primary mask-[radial-gradient(70%_60%_at_80%_0%,black_0%,transparent_100%)]"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <h2
              id="skills-heading"
              className="font-display text-display-md leading-tight text-ink lg:text-display-xl lg:leading-[1.02]"
            >
              The stack I reach for daily.
            </h2>
          </div>

          <div>
            <p className="max-w-md text-body-md text-body">
              Tools chosen for speed, type safety and user experience — from
              first sketch to production deploy.
            </p>
            <h3 className="sr-only">Top skills</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {TOP_SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-pill bg-canvas px-3 py-1 text-body-sm font-semibold text-ink-deep"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map(({ title, description, icon: Icon, tools }, i) => (
            <li key={title} className="flex flex-col rounded-xl bg-canvas p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-full bg-primary-pale text-ink-deep">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span className="text-body-sm font-semibold tabular-nums text-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-display-xs text-ink">{title}</h3>
              <p className="mt-2 text-body-sm text-body">{description}</p>

              <ul
                aria-label={`${title} tools`}
                className="mt-auto flex flex-wrap gap-1.5 pt-6"
              >
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-sm border border-border-soft px-2 py-0.5 text-caption text-body"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-6 overflow-hidden rounded-xl bg-ink py-6">
          <h3 className="sr-only">Core technologies</h3>
          <ul className="sr-only">
            {CORE_TECH.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          {/* two identical runs so the -50% loop seams invisibly */}
          <div
            aria-hidden
            className="mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          >
            <div className="flex w-max animate-marquee motion-reduce:animate-none">
              {[0, 1].map((run) => (
                <div key={run} className="flex shrink-0 items-center">
                  {CORE_TECH.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center font-display text-display-xs font-extrabold text-primary"
                    >
                      <span className="px-6">{tech}</span>
                      <span className="text-canvas-soft/40">✳</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
