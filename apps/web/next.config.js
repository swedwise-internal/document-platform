/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output bundles everything needed for container deployment
  output: 'standalone',

  reactStrictMode: true,

  experimental: {
    // Ensure Prisma engine binaries are included in standalone trace
    outputFileTracingIncludes: {
      '/api/**': ['./node_modules/.prisma/**/*'],
    },
  },

  // Custom webpack config for markdown processing
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },

  // Proxy mermaid-live-editor — configurable for Kubernetes service discovery
  async rewrites() {
    const mermaidUrl = process.env.MERMAID_EDITOR_URL || 'http://localhost:3001';
    return [
      {
        source: '/editor/:path*',
        destination: `${mermaidUrl}/:path*`,
      },
    ];
  },

  // Redirect old routes to new area-based routes
  async redirects() {
    return [
      {
        source: '/documents',
        destination: '/ims/documents',
        permanent: false,
      },
      {
        source: '/documents/:path*',
        destination: '/ims/documents/:path*',
        permanent: false,
      },
      {
        source: '/training',
        destination: '/ims/training',
        permanent: false,
      },
      {
        source: '/registers',
        destination: '/ims/registers',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
