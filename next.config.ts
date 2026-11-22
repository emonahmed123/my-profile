import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // self-contained server in .next/standalone for the Dockerfile; Vercel
  // packages the app itself, so leave the default output there
  output: process.env.VERCEL ? undefined : "standalone",
  // hide the dev-only "N" badge — it sits over the brand mark on mobile
  devIndicators: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
