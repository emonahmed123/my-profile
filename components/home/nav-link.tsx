import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<"a">;

/**
 * DESIGN.md `nav-link` — body-sm-strong, ink on light surfaces / sage on the dark panel.
 * A plain anchor, not `next/link`: these are same-page `#hash` jumps, and
 * `<Link>` skips the scroll when the URL already carries that hash.
 */
export function NavLink({ className, children, ...props }: NavLinkProps) {
  return (
    <a
      className={cn(
        "text-body-sm font-semibold text-body transition-colors hover:text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export default NavLink;
