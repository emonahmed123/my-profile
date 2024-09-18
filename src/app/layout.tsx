import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Providers } from "@/utils/providers";
import Navbarall from "@/app/Component/shared/Navbarall";
import Footer from "./Component/shared/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "400", "500", "600", "700", "800"]
})



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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}  antialiased   bg-[url('../assets/site-bg.jpg')] bg-no-repeat bg-cover`}
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
