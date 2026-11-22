/**
 * Site-wide identity used by metadata, JSON-LD, sitemap and robots.
 *
 * The canonical URL comes from `NEXT_PUBLIC_SITE_URL` (set it to the live
 * domain, e.g. `https://emonahmed.dev`). On Vercel it falls back to the
 * project's production domain, which Vercel injects at build time.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const site = {
  url: resolveSiteUrl().replace(/\/$/, ""),
  name: "Emon Ahmed",
  title: "Emon Ahmed — Full-Stack Engineer & Frontend Engineer | Web Developer",
  description:
    "Emon Ahmed is a Full-Stack Engineer, Frontend Engineer and Web Developer from Bangladesh, building fast, scalable web applications with React, Next.js, TypeScript and Node.js.",
  jobTitle: "Full-Stack Engineer",
  keywords: [
    "Emon Ahmed",
    "Emon Ahmed portfolio",
    "Emon Ahmed developer",
    "Frontend Engineer",
    "Front-end Engineer",
    "Full-Stack Engineer",
    "Full Stack Engineer",
    "Fullstack Engineer",
    "Web Developer",
    "Full-Stack Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer Bangladesh",
    "Frontend Engineer Bangladesh",
  ],
  image: "/assets/images/emon-portrait.webp",
  email: "imonshomon@gmail.com",
  sameAs: [
    "https://github.com/emonahmed123",
    "https://www.linkedin.com/in/emon-ahmed123/",
  ],
} as const;
