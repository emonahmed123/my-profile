import Link from "next/link";

import { cn } from "@/lib/utils";

interface BrandMarkProps {
  /** Full name shown next to the monogram. */
  name?: string;
  /** Monogram inside the lime square. Derived from `name` when omitted. */
  initials?: string;
  href?: string;
  className?: string;
}

function toInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function BrandMark({
  name = "Emon Ahmed",
  initials,
  href = "/",
  className,
}: BrandMarkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2.5 rounded-xl border border-border-soft py-1.5 pl-1.5 pr-4 transition-colors hover:border-ink/30",
        className,
      )}
    >
      <span className="grid size-7 place-items-center rounded-sm bg-primary text-caption font-semibold text-on-primary">
        {initials ?? toInitials(name)}
      </span>
      <span className="text-body-sm font-semibold text-ink">{name}</span>
    </Link>
  );
}

export default BrandMark;
