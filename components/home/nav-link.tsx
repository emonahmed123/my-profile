import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<typeof Link>;

/** DESIGN.md `nav-link` — body-sm-strong, ink on light surfaces / sage on the dark panel. */
export function NavLink({ className, children, ...props }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "text-body-sm font-semibold text-body transition-colors hover:text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export default NavLink;
