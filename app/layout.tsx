import ClickSounds from "@/components/ui/click-sounds";
import PreloaderStairs from "@/components/ui/preloader-stairs";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Manrope stands in for the proprietary Wise Sans display face (see DESIGN.md).
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    firstName: "Emon",
    lastName: "Ahmed",
    images: [{ url: site.image, alt: "Portrait of Emon Ahmed" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// schema.org Person — tells Google who the site is about (name, roles, profiles)
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}${site.image}`,
  email: `mailto:${site.email}`,
  jobTitle: site.jobTitle,
  description: site.description,
  knowsAbout: [
    "Frontend Engineering",
    "Full-Stack Engineering",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  hasOccupation: [
    { "@type": "Occupation", name: "Full-Stack Engineer" },
    { "@type": "Occupation", name: "Frontend Engineer" },
    { "@type": "Occupation", name: "Web Developer" },
  ],
  worksFor: { "@type": "Organization", name: "Vzure Solution" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tangail",
    addressCountry: "BD",
  },
  sameAs: [...site.sameAs],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full",
        "antialiased",
        geistMono.variable,
        "font-sans",
        inter.variable,
        manrope.variable,
      )}
    >
      <GoogleTagManager gtmId="GTM-WVC3V6SM" />
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <PreloaderStairs />
        <ClickSounds />
        {children}
      </body>
    </html>
  );
}
