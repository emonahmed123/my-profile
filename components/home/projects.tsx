import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface Project {
  title: string;
  category: "Full-stack" | "Frontend";
  description: string;
  /** 16:10 screenshot under `public/` */
  image: string;
  live: string;
  repos?: { label: string; href: string }[];
  tech: string[];
}

/** Strongest first. */
export const PROJECTS: Project[] = [
  {
    title: "Resume Craft",
    category: "Full-stack",
    description:
      "Resume builder with customisable templates for different career goals — polished, professional resumes in minutes.",
    image: "/assets/images/projects/resume-craft.webp",
    live: "https://resume-craft-web.vercel.app",
    repos: [
      { label: "Client", href: "https://github.com/touhidcodes/Resume-Craft" },
      {
        label: "Server",
        href: "https://github.com/touhidcodes/Resume-Craft-Server",
      },
    ],
    tech: ["React", "TypeScript", "Redux", "Material UI", "Prisma", "Express"],
  },
  {
    title: "EAS Grocery",
    category: "Full-stack",
    description:
      "Grocery e-commerce store for everyday staples and specialty ingredients, with a Next.js storefront and an Express API.",
    image: "/assets/images/projects/grocery.webp",
    live: "https://grocery-store-sable.vercel.app/",
    repos: [
      { label: "Client", href: "https://github.com/emonahmed123/grocery-shop" },
      {
        label: "Server",
        href: "https://github.com/emonahmed123/grocery-shop-server",
      },
    ],
    tech: ["Next.js", "TypeScript", "Redux", "NextUI", "MongoDB", "Express"],
  },
  {
    title: "Car Parts Manufacturer",
    category: "Full-stack",
    description:
      "Parts ordering platform with JWT-protected checkout, a dashboard to track and cancel orders, and an admin role for managing products.",
    image: "/assets/images/projects/car-parts.webp",
    live: "https://car-parts-manufacturer-8d75b.web.app/",
    repos: [
      {
        label: "Client",
        href: "https://github.com/emonahmed123/car-manufactureing-client-side",
      },
      {
        label: "Server",
        href: "https://github.com/emonahmed123/car-manufacture-server-side",
      },
    ],
    tech: ["React", "React Query", "Tailwind CSS", "Firebase", "MongoDB"],
  },
  {
    title: "Bike Warehouse",
    category: "Full-stack",
    description:
      "Inventory manager where anyone can browse stock, and signed-in users can restock, deliver and remove items.",
    image: "/assets/images/projects/bike-warehouse.webp",
    live: "https://warehouse-82822.firebaseapp.com/",
    repos: [
      {
        label: "Server",
        href: "https://github.com/emonahmed123/wharehouse-mangement-sever",
      },
    ],
    tech: ["React", "React Query", "Tailwind CSS", "Firebase", "MongoDB"],
  },
  {
    title: "Wedding Photographer",
    category: "Frontend",
    description:
      "Responsive portfolio for a wedding photographer, with bookable photography services and Firebase sign-up / sign-in.",
    image: "/assets/images/projects/photographer.webp",
    live: "https://photographer-436e3.web.app/",
    tech: ["React", "React Router", "Bootstrap", "Firebase Auth"],
  },
  {
    title: "Best Laptop",
    category: "Frontend",
    description:
      "Laptop showcase with customer reviews and a dashboard of sales charts.",
    image: "/assets/images/projects/best-laptop.webp",
    live: "https://bestlaptop.netlify.app/",
    tech: ["React", "React Router", "Bootstrap"],
  },
  {
    title: "Panda",
    category: "Frontend",
    description:
      "Responsive demo e-commerce storefront with product categories and promotional banners.",
    image: "/assets/images/projects/panda.webp",
    live: "https://panda-emon.netlify.app/",
    tech: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "SaaS Analytics Landing",
    category: "Frontend",
    description:
      "Responsive marketing landing page for a SaaS data-analytics product.",
    image: "/assets/images/projects/saas-analytics.webp",
    live: "https://incandescent-raindrop-6291d9.netlify.app/",
    tech: ["React"],
  },
];

interface ProjectsProps {
  className?: string;
}

/** Work band — numbered screenshot cards, two-up from tablet. */
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
            storefronts. Each one is live; open it and click around.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <li key={project.title} className="group flex flex-col">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — live site`}
                className="relative block aspect-16/10 overflow-hidden rounded-xl border border-border-soft bg-canvas-soft"
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </a>

              <p className="mt-6 text-caption font-semibold uppercase tracking-widest text-mute">
                <span className="tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {" · "}
                {project.category}
              </p>
              <h3 className="mt-2 text-display-xs text-ink">{project.title}</h3>
              <p className="mt-2 max-w-xl text-body-md text-body">
                {project.description}
              </p>

              <ul
                aria-label={`${project.title} tech`}
                className="mt-4 flex flex-wrap gap-1.5"
              >
                {project.tech.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-sm border border-border-soft px-2 py-0.5 text-caption text-body"
                  >
                    {tool}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                {[
                  { label: "Live site", href: project.live },
                  ...(project.repos ?? []),
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — ${link.label}`}
                    className="inline-flex items-center gap-1 text-body-sm font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </a>
                ))}
              </div>
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
