import { ArrowUpRight } from "lucide-react";

import ProjectDialog from "@/components/home/project-dialog";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  className?: string;
}

/** Work band — numbered screenshot cards, two-up from tablet; each opens a detail modal. */
export function Projects({ className }: ProjectsProps) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={cn("scroll-mt-16 px-4 py-6 md:px-6 md:py-10", className)}
    >
      <div className="mx-auto w-full max-w-[96rem] px-4 py-12 md:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
          <h2
            id="projects-heading"
            className="font-display text-display-md leading-tight text-ink lg:text-display-xl lg:leading-[1.02]"
          >
            Things I&apos;ve built.
          </h2>
          <p className="max-w-md text-body-md text-body">
            Full-stack and frontend projects — from MERN dashboards to
            storefronts. Open any project for the full story, stack and links.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <li key={project.title}>
              <ProjectDialog project={project} index={i} />
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-4">
          <p className="text-body-md text-body">Have something in mind?</p>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-ink bg-canvas px-6 text-button-md text-ink transition-colors hover:bg-canvas-soft"
          >
            Discuss your project
            <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
