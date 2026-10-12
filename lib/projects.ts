/** Portfolio projects — cards on the home page, full detail in the modal. */

export interface Project {
  title: string;
  category: "Full-stack" | "Frontend";
  description: string;
  /** shown in the detail modal */
  highlights: string[];
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
    highlights: [
      "Library of customisable resume templates",
      "Templates tuned to different career goals",
      "Polished, professional output from a guided builder",
    ],
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
    highlights: [
      "Catalogue spanning everyday staples to specialty ingredients",
      "Next.js storefront with Redux state and React Hook Form",
      "Express + MongoDB API secured with JWT",
    ],
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
    highlights: [
      "Guests can browse; buying requires signing in",
      "User dashboard to review purchases and cancel orders",
      "Admin role to add and remove products",
      "JWT-protected Express + MongoDB API",
    ],
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
    highlights: [
      "Public inventory anyone can browse",
      "Signed-in users restock, deliver and delete items",
      "Stock changes restricted to authenticated users",
      "Fully responsive layout",
    ],
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
    highlights: [
      "Portfolio of wedding photography work",
      "Hire from different photography service packages",
      "Sign-up and sign-in with Firebase Authentication",
      "Fully responsive layout",
    ],
    image: "/assets/images/projects/photographer.webp",
    live: "https://photographer-436e3.web.app/",
    tech: ["React", "React Router", "Bootstrap", "Firebase Auth"],
  },
  {
    title: "Best Laptop",
    category: "Frontend",
    description:
      "Laptop showcase with customer reviews and a dashboard of sales charts.",
    highlights: [
      "Product showcase home page",
      "Customer reviews section",
      "Dashboard with sales charts",
    ],
    image: "/assets/images/projects/best-laptop.webp",
    live: "https://bestlaptop.netlify.app/",
    tech: ["React", "React Router", "Bootstrap"],
  },
  {
    title: "Panda",
    category: "Frontend",
    description:
      "Responsive demo e-commerce storefront with product categories and promotional banners.",
    highlights: [
      "Product categories with promotional banners",
      "Product listing pages",
      "Fully responsive layout",
    ],
    image: "/assets/images/projects/panda.webp",
    live: "https://panda-emon.netlify.app/",
    tech: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "SaaS Analytics Landing",
    category: "Frontend",
    description:
      "Responsive marketing landing page for a SaaS data-analytics product.",
    highlights: [
      "Hero with clear call to action",
      "Feature sections for a data-analytics product",
      "Fully responsive layout",
    ],
    image: "/assets/images/projects/saas-analytics.webp",
    live: "https://incandescent-raindrop-6291d9.netlify.app/",
    tech: ["React"],
  },
];
