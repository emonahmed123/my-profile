import Navbarall from "@/app/Component/shared/Navbarall";
import { Providers } from "@/utils/providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./Component/shared/Footer";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Emon Ahmed",
  description: "Emon Protfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistMono.variable} ${poppins.variable}  antialiased    bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 `}
      >
        <Providers>
          <Navbarall />

          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
