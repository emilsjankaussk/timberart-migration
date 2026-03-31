import type { Config } from "tailwindcss";

// Tailwind v4 note: primary theme config is now done via @theme in globals.css.
// This file is kept for any legacy plugin or content configuration needs.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;
