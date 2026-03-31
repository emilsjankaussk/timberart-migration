import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "timberart.lv" },
      { protocol: "http",  hostname: "localhost" },
    ],
  },
};

export default nextConfig;
