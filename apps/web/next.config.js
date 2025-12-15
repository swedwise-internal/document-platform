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
};

module.exports = nextConfig;
