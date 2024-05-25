/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,html}"
  ],
  theme: {
    screens: {
      'sm': '768px',
      // => @media (min-width: 768px) { ... }
      'md': '992px',
      // => @media (min-width: 960px) { ... }
      'lg': '1240px',
      // => @media (min-width: 1240px) { ... }
      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    // container: {
    //   center: false,
    // },
    extend: {
      fontFamily: {
        "Playfair": ['Playfair Display', 'serif'],
        "Lato": ['Lato', 'sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-bg': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
          'infinite-scroll': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-100%)' },
          },
          'infinite-scroll-bg': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-100%)' },
          }
      }
    },
  },
  plugins: [],
}

