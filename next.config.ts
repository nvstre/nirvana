/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you're using Turbopack in dev
  experimental: {
    turbo: {
      resolveAlias: {
        // Optional: Add any path aliases if needed
      },
    },
  },
}

module.exports = nextConfig