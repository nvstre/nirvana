import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevent Node.js modules from being bundled for the browser
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        path: false,
        os: false,
        stream: false,
      }
    }
    return config
  },
  // Disable linting during builds if needed
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Only if you want to skip type checking during builds
    // ignoreBuildErrors: true,
  },
}

export default nextConfig