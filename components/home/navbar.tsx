import Link from "next/link";

import BrandMark from "@/components/home/brand-mark";
import NavLink from "@/components/home/nav-link";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Experience", href: "#impact" },
];

interface NavbarProps {
  links?: typeof NAV_LINKS;
  className?: string;
}

/** DESIGN.md `nav-bar` — rides inside the dark hero panel. */
export function Navbar({ links = NAV_LINKS, className }: NavbarProps) {
  return (
    <nav
      className={cn(
        "relative z-20 flex items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-6",
        className,
      )}
    >
      <BrandMark />

      <ul className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="inline-flex h-10 shrink-0 items-center rounded-xl bg-primary px-5 text-body-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
      >
        Let&apos;s Talk
      </Link>
    </nav>
  );
}

export default Navbar;
