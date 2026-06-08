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
