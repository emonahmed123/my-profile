"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { Dialog } from "radix-ui";

import BrandMark from "@/components/home/brand-mark";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  links: { label: string; href: string }[];
  className?: string;
}

/**
 * Below `md` the inline links are hidden — this menu button opens them in a
 * drop-down card instead. Radix Dialog gives focus trapping, Escape-to-close
 * and scroll lock; each link closes the menu as it jumps to its section.
 */
export function MobileNav({ links, className }: MobileNavProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label="Open menu"
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-xl border border-border-soft bg-canvas text-ink transition-colors hover:bg-canvas-soft md:hidden",
          className,
        )}
      >
        <Menu aria-hidden className="size-4" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-60 bg-ink/40 backdrop-blur-sm duration-200 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out md:hidden" />

        <Dialog.Content className="fixed inset-x-3 top-3 z-60 rounded-xl border border-border-soft bg-canvas p-4 shadow-2xl shadow-ink/20 duration-200 focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-top-4 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-4 motion-reduce:animate-none md:hidden">
          <div className="flex items-center justify-between gap-4">
            <BrandMark />
            <Dialog.Close
              aria-label="Close menu"
              className="grid size-10 shrink-0 place-items-center rounded-xl border border-border-soft bg-canvas text-ink transition-colors hover:bg-canvas-soft"
            >
              <X aria-hidden className="size-4" />
            </Dialog.Close>
          </div>

          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">
            Jump to a section of the page.
          </Dialog.Description>

          <ul className="mt-4 flex flex-col">
            {links.map((link) => (
              <li key={link.label} className="border-b border-border-soft">
                <Dialog.Close asChild>
                  <a
                    href={link.href}
                    className="flex items-center justify-between py-4 text-display-xs text-ink"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden className="size-5 text-mute" />
                  </a>
                </Dialog.Close>
              </li>
            ))}
          </ul>

          <Dialog.Close asChild>
            <a
              href="#contact"
              className="mt-6 flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-button-md text-on-primary transition-colors hover:bg-primary-active"
            >
              Let&apos;s Talk
            </a>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MobileNav;
