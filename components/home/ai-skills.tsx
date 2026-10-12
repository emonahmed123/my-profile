import { ArrowUpRight } from "lucide-react";

import CopyCommand from "@/components/home/copy-command";
import { cn } from "@/lib/utils";

interface AgentSkill {
  name: string;
  description: string;
  /** `owner/repo` on GitHub */
  repo: string;
  /** omit to install the whole repo as a bundle */
  skill?: string;
  /** shown for bundles, e.g. "24 skills" */
  note?: string;
  /** install command when it isn't `npx skills add` */
  command?: string;
  /** homepage; defaults to the GitHub repo */
  href?: string;
}

interface SkillAuthor {
  name: string;
  handle: string;
  skills: AgentSkill[];
}

/** Agent skills in my daily workflow, grouped by who wrote them. */
export const AI_SKILL_AUTHORS: SkillAuthor[] = [
  {
    name: "Fission",
    handle: "Fission-AI",
    skills: [
      {
        name: "openspec",
        description:
          "Spec-driven development — explore, propose, apply, verify and archive every change with /opsx commands.",
        repo: "Fission-AI/OpenSpec",
        note: "5 commands",
        command: "npm install -g @fission-ai/openspec@latest",
        href: "https://openspec.dev",
      },
    ],
  },
  {
    name: "Matt Pocock",
    handle: "mattpocock",
    skills: [
      {
        name: "grill-me",
        description:
          "Has the agent interview me relentlessly about a plan or design until the weak spots show.",
        repo: "mattpocock/skills",
        skill: "grill-me",
      },
      {
        name: "improve-codebase-architecture",
        description:
          "Scans the codebase for deepening opportunities, reports them visually, then talks through the one I pick.",
        repo: "mattpocock/skills",
        skill: "improve-codebase-architecture",
      },
    ],
  },
  {
    name: "Julius Brussee",
    handle: "JuliusBrussee",
    skills: [
      {
        name: "caveman",
        description:
          "Terse, answer-first replies — filler gone, technical facts kept, fewer tokens.",
        repo: "JuliusBrussee/caveman",
        skill: "caveman",
      },
      {
        name: "caveman-review",
        description:
          "Code review as one line per finding: location, problem, fix.",
        repo: "JuliusBrussee/caveman",
        skill: "caveman-review",
      },
      {
        name: "caveman-commit",
        description:
          "Conventional Commits message trimmed down to the intent of the change.",
        repo: "JuliusBrussee/caveman",
        skill: "caveman-commit",
      },
    ],
  },
  {
    name: "Paul Bakaus",
    handle: "pbakaus",
    skills: [
      {
        name: "impeccable",
        description:
          "Design, critique, audit and polish interfaces — hierarchy, type, colour, motion and accessibility.",
        repo: "pbakaus/impeccable",
        skill: "impeccable",
      },
      {
        name: "frontend-design",
        description:
          "Steers the agent away from generic, AI-looking UI toward deliberate design choices.",
        repo: "pbakaus/impeccable",
        skill: "frontend-design",
      },
    ],
  },
  {
    name: "Addy Osmani",
    handle: "addyosmani",
    skills: [
      {
        name: "agent-skills",
        description:
          "Senior-engineer workflows and quality gates across the whole software lifecycle.",
        repo: "addyosmani/agent-skills",
        note: "24 skills",
      },
    ],
  },
];

function installCommand({ repo, skill, command }: AgentSkill) {
  if (command) return command;
  return `npx skills add ${repo}${skill ? ` --skill ${skill}` : ""}`;
}

function toInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

interface AiSkillsProps {
  className?: string;
}

/** AI-skills band — the polarity-flipped dark card, authors two-up. */
export function AiSkills({ className }: AiSkillsProps) {
  const total = AI_SKILL_AUTHORS.reduce((n, a) => n + a.skills.length, 0);

  return (
    <section
      id="ai-skills"
      aria-labelledby="ai-skills-heading"
      className={cn("scroll-mt-16 px-4 py-6 md:px-6 md:py-10", className)}
    >
      <div className="mx-auto w-full max-w-[96rem] rounded-xl bg-ink px-4 py-12 md:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
          <h2
            id="ai-skills-heading"
            className="font-display text-display-md leading-tight text-primary lg:text-display-xl lg:leading-[1.02]"
          >
            AI skills I work with.
          </h2>
          <p className="max-w-md text-body-md text-canvas-soft/70">
            The {total} agent skills in my daily agentic workflow with Claude
            Code — each one a single command away.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {AI_SKILL_AUTHORS.map((author) => (
            <li
              key={author.handle}
              // min-w-0: let the card shrink so the nowrap command scrolls inside it
              className="min-w-0 rounded-xl border border-canvas-soft/10 p-4 md:p-6"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-body-sm font-semibold text-on-primary"
                >
                  {toInitials(author.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-body-md font-semibold text-canvas-soft">
                    {author.name}
                  </h3>
                  <a
                    href={`https://github.com/${author.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-canvas-soft/60 underline-offset-4 hover:text-canvas-soft hover:underline"
                  >
                    @{author.handle}
                  </a>
                </div>
                <span className="text-caption text-canvas-soft/60">
                  {author.skills.length}{" "}
                  {author.skills.length === 1 ? "skill" : "skills"}
                </span>
              </div>

              <ul className="mt-6 divide-y divide-canvas-soft/10">
                {author.skills.map((skill) => (
                  <li key={skill.name} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href={skill.href ?? `https://github.com/${skill.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-w-0 items-center gap-1 font-mono text-body-md font-semibold text-primary underline-offset-4 wrap-anywhere hover:underline"
                      >
                        /{skill.name}
                        <ArrowUpRight aria-hidden className="size-4" />
                      </a>
                      {skill.note && (
                        <span className="rounded-pill bg-canvas-soft/10 px-2.5 py-0.5 text-caption text-canvas-soft/80">
                          {skill.note}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-body-sm text-canvas-soft/70">
                      {skill.description}
                    </p>
                    <CopyCommand
                      command={installCommand(skill)}
                      className="mt-3"
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AiSkills;
