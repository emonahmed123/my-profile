import BrandMark from "@/components/home/brand-mark";
import NavLink from "@/components/home/nav-link";
import StickyNav from "@/components/home/sticky-nav";
import SoundToggle from "@/components/ui/sound-toggle";
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
    <StickyNav>
      <nav
        className={cn(
          "relative flex items-center justify-between gap-4 px-4 py-4 transition-[padding] md:px-8 md:py-6 group-data-[pinned=true]:py-3 md:group-data-[pinned=true]:py-3 md:group-data-[pinned=true]:px-6",
          className,
        )}
      >
        <BrandMark />

        {/* pinned: links slide right, next to the actions */}
        <ul className="hidden items-center gap-8 md:flex group-data-[pinned=true]:ml-auto group-data-[pinned=true]:mr-4">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <SoundToggle />
          <a
            href="#contact"
            className="inline-flex h-10 shrink-0 items-center rounded-xl bg-primary px-5 text-body-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    </StickyNav>
  );
}

export default Navbar;
