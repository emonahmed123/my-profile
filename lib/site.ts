/**
 * Site-wide identity used by metadata, JSON-LD, sitemap and robots.
 *
 * The canonical URL is the live Vercel domain; set `NEXT_PUBLIC_SITE_URL` to
 * override it (e.g. after moving to a custom domain).
 */
function resolveSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL || "https://my-new-protfolio.vercel.app"
  );
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
