import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Manrope stands in for the proprietary Wise Sans display face (see DESIGN.md).
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emon Ahmed",
  description: "Emon Ahmed Personal Webiste",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        manrope.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
