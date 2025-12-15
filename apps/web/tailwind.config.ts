import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Swedwise brand colors (customize as needed)
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Document status colors
        status: {
          draft: '#f59e0b',
          review: '#3b82f6',
          approved: '#10b981',
          obsolete: '#6b7280',
        },
        // Classification colors
        classification: {
          public: '#10b981',
          internal: '#3b82f6',
          confidential: '#f59e0b',
          restricted: '#ef4444',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            // Custom prose styles for rendered markdown
            'h1, h2, h3, h4': {
              fontWeight: '600',
            },
            table: {
              width: '100%',
            },
            'th, td': {
              padding: '0.75rem',
              borderWidth: '1px',
              borderColor: '#e5e7eb',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
