/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use class-based dark mode for next-themes compatibility
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark theme color
        dark: {
          DEFAULT: '#301934', // Custom dark purple for dark mode
        },
        // Border colors for light and dark modes
        border: {
          DEFAULT: 'rgb(228 228 231)', // Light mode border
          dark: 'rgb(63 63 70)', // Dark mode border - matches our dark theme
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 