import { ArrowUpRight, Mail, MapPin, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import { cn } from "@/lib/utils";

interface Channel {
  label: string;
  /** shown under the label */
  value: string;
  href: string;
  icon: IconType | LucideIcon;
}

/** Direct lines — where a message gets answered. */
export const REACH: Channel[] = [
  {
    label: "Email me",
    value: "imonshomon@gmail.com",
    href: "mailto:imonshomon@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/8801921837900",
    icon: FaWhatsapp,
  },
  {
    label: "Messenger",
    value: "Emon Ahmed",
    href: "https://m.me/100009847200102",
    icon: FaFacebookMessenger,
  },
];

/** Profiles — where the work lives. */
export const PROFILES: Channel[] = [
  {
    label: "GitHub",
    value: "@emonahmed123",
    href: "https://github.com/emonahmed123",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "in/emon-ahmed123",
    href: "https://www.linkedin.com/in/emon-ahmed123/",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    value: "Emon Ahmed",
    href: "https://www.facebook.com/profile.php?id=100009847200102",
    icon: FaFacebookF,
  },
];

function ChannelCard({ label, value, href, icon: Icon }: Channel) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="group flex items-center gap-4 rounded-xl bg-canvas p-4 transition-colors hover:bg-primary-pale md:p-5"
    >
      <span
        aria-hidden
        className="grid size-12 shrink-0 place-items-center rounded-lg border border-border-soft bg-canvas text-ink transition-colors group-hover:border-transparent group-hover:bg-primary md:size-14"
      >
        <Icon className="size-5 md:size-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-body-md font-semibold text-ink">
          {label}
        </span>
        <span className="block truncate text-body-sm text-mute">{value}</span>
      </span>
      <ArrowUpRight
        aria-hidden
        className="size-5 shrink-0 text-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink motion-reduce:transition-none"
      />
    </a>
  );
}

interface ContactProps {
  className?: string;
}

/** Contact band — direct lines first, then profiles, on the sage panel. */
export function Contact({ className }: ContactProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={cn("scroll-mt-16 px-4 py-6 md:px-6 md:py-10", className)}
    >
      <div className="mx-auto w-full max-w-[96rem] rounded-xl bg-canvas-soft px-4 py-12 md:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
          <h2
            id="contact-heading"
            className="font-display text-display-md leading-tight text-ink lg:text-display-xl lg:leading-[1.02]"
          >
            Let&apos;s build something.
          </h2>
          <div>
            <p className="max-w-md text-body-md text-body">
              Have a product, a role or just an idea? Email is the fastest way
              to reach me — I usually reply within a day.
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-body-sm text-body">
              <span className="inline-flex items-center gap-2 rounded-pill bg-primary-pale px-3 py-1 font-semibold text-positive-deep">
                <span aria-hidden className="size-2 rounded-pill bg-positive" />
                Open to new conversations
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden className="size-4" />
                Tangail, Bangladesh
              </span>
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-12">
          <div>
            <h3 className="text-display-xs text-ink">Reach me</h3>
            <ul className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {REACH.map((channel) => (
                <li key={channel.label}>
                  <ChannelCard {...channel} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-display-xs text-ink">Find me on</h3>
            <ul className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {PROFILES.map((channel) => (
                <li key={channel.label}>
                  <ChannelCard {...channel} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
