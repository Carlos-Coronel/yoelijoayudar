// Optional base path for project pages (e.g., "/repo-name").
// Set NEXT_PUBLIC_BASE_PATH in repository Settings > Secrets and variables > Actions > Variables if needed.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static export for GitHub Pages
  output: 'export',
  // Ensures routes are generated as folders with index.html, compatible with GitHub Pages
  trailingSlash: true,
  // If deploying to a project page like https://user.github.io/repo-name,
  // set NEXT_PUBLIC_BASE_PATH to "/repo-name" so assets resolve correctly.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
}

export default nextConfig
