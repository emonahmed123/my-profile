import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // hide the dev-only "N" badge — it sits over the brand mark on mobile
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
