/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          dark: '#030712',
          deep: '#0a192f',
          teal: '#06b6d4',
          glass: 'rgba(10, 25, 47, 0.45)',
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}