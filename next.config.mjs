import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// Enable Cloudflare bindings in local `next dev` (no-op in production)
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const isGithubPages = process.env.GITHUB_PAGES === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages preview; omit for Vercel/Cloudflare
  ...(isGithubPages && {
    output: "export",
    basePath: "/ms-g-writes",
  }),
  images: {
    // Next.js Image Optimization requires a server; disable for static builds
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
