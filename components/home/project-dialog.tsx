"use client";

import { ArrowUpRight, Globe, X } from "lucide-react";
import Image from "next/image";
import { Dialog } from "radix-ui";
import { FaGithub } from "react-icons/fa6";

import type { Project } from "@/lib/projects";

interface ProjectDialogProps {
  project: Project;
  /** 0-based position, shown as 01, 02… */
  index: number;
}

/**
 * A project card that opens a detail modal — big screenshot, full description,
 * highlights, tech stack and every link (live site + repos).
 */
export function ProjectDialog({ project, index }: ProjectDialogProps) {
  const number = String(index + 1).padStart(2, "0");
  const links = [
    { label: "Live site", href: project.live, icon: Globe },
    ...(project.repos ?? []).map((repo) => ({
      label: `${repo.label} code`,
      href: repo.href,
      icon: FaGithub,
    })),
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger className="group flex w-full flex-col text-left">
        <span className="relative block aspect-16/10 w-full overflow-hidden rounded-xl border border-border-soft bg-canvas-soft">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </span>

        <span className="mt-6 text-caption font-semibold uppercase tracking-widest text-mute">
          <span className="tabular-nums">{number}</span> · {project.category}
        </span>
        <span className="mt-2 text-display-xs text-ink">{project.title}</span>
        <span className="mt-2 max-w-xl text-body-md text-body">
          {project.description}
        </span>
        <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-ink underline-offset-4 group-hover:underline">
          View project
          <ArrowUpRight aria-hidden className="size-4" />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-60 bg-ink/60 backdrop-blur-sm duration-200 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />

        <Dialog.Content className="fixed inset-x-3 top-1/2 z-60 mx-auto max-h-[92dvh] max-w-5xl -translate-y-1/2 overflow-y-auto rounded-2xl bg-canvas shadow-2xl shadow-ink/20 duration-200 focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95 md:inset-x-6">
          <div className="bg-canvas-soft px-4 pt-14 pb-6 md:px-16 md:pt-16 md:pb-10">
            <div className="relative mx-auto aspect-16/10 max-w-3xl overflow-hidden rounded-xl border border-border-soft bg-canvas shadow-lg shadow-ink/10">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 48rem"
                className="object-cover object-top"
              />
            </div>
          </div>

          <Dialog.Close
            aria-label="Close"
            className="absolute right-3 top-3 grid size-11 place-items-center rounded-full border border-ink bg-canvas text-ink transition-colors hover:bg-canvas-soft md:right-5 md:top-5 md:size-12"
          >
            <X aria-hidden className="size-5" />
          </Dialog.Close>

          <div className="px-5 py-8 md:px-12 md:py-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-caption uppercase tracking-widest text-mute">
                  {number} · {project.category}
                </p>
                <Dialog.Title className="mt-2 font-display text-display-md leading-tight text-ink">
                  {project.title}
                </Dialog.Title>
              </div>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-button-md text-on-primary transition-colors hover:bg-primary-active"
              >
                Visit live site
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </div>

            <hr className="my-8 border-border-soft" />

            <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <div>
                <Dialog.Description className="text-body-lg text-body">
                  {project.description}
                </Dialog.Description>

                <h3 className="mt-8 text-body-md font-semibold text-ink">
                  Highlights
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {project.highlights.map((point) => (
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
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-body-md font-semibold text-ink">
                    Tech stack
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-sm border border-border-soft px-2 py-0.5 text-caption text-body"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-body-md font-semibold text-ink">Links</h3>
                  <ul className="mt-3 divide-y divide-border-soft rounded-xl border border-border-soft">
                    {links.map(({ label, href, icon: Icon }) => (
                      <li key={href}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-3 px-4 py-3 text-body-sm font-semibold text-ink transition-colors hover:bg-primary-pale"
                        >
                          <Icon aria-hidden className="size-4 shrink-0" />
                          <span className="min-w-0 flex-1">
                            {label}
                            <span className="block truncate text-caption font-normal text-mute">
                              {href
                                .replace(/^https?:\/\//, "")
                                .replace(/\/$/, "")}
                            </span>
                          </span>
                          <ArrowUpRight
                            aria-hidden
                            className="size-4 shrink-0 text-mute transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-ink"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ProjectDialog;
