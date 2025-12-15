/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports if needed
  // output: 'export',

  // Disable strict mode for development (enable for production)
  reactStrictMode: true,

  // Configure content directory access
  experimental: {
    // Allow importing from outside src directory (for content)
  },

  // Custom webpack config for markdown processing
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
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
