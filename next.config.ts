import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve Next.js generated JS/CSS/fonts from the stable Vercel hostname.
  // This avoids custom-domain network-path issues affecting /_next/static assets.
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://dnhport.vercel.app"
      : undefined,
};

export default nextConfig;
