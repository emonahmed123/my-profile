import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // self-contained server in .next/standalone — used by the Dockerfile
  output: "standalone",
  // hide the dev-only "N" badge — it sits over the brand mark on mobile
  devIndicators: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
