import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppe: ["var(--font-poppins)"],
        mono: ["var(--font-roboto-mono)"],
      },

      colors: {
        primary: "#0a0a0a",
        para: "#c9c9c9",
        neutral: "#ff014f",
        secondary: "#0097e9",
        accent: "#B809C3",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
