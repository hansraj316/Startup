/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0066CC',
        'brand-orange': '#FF6B35',
        'brand-gray': '#6B7280',
        brand: {
          blue: '#0066CC',
          orange: '#FF6B35',
        },
      },
      spacing: {
        unit: '8px',
      },
    },
  },
  plugins: [],
}

module.exports = config
