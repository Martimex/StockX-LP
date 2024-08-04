/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#006340',
        'lightgray': '#f5f5f5',
        'silver': '#adadad',
        'coal': '#293632',
      },

      fontFamily: {
        roboto: ['Roboto', 'Arial', 'sans-serif'],
      },

      fontSize: {
        's': ['0.75rem', { lineHeight: '1rem' }],  // 12px
        'm': ['1rem', { lineHeight: '1.5rem'}],  // 16px
        'l': ['1.25rem', { lineHeight: '1.3rem'}], // 20px
        'xl': ['1.375rem', { lineHeight: '1.25rem'}],  // 22px

        'h4': ['2rem', {lineHeight: '3rem'}],  // 32px
        'h3': ['2.625rem', { lineHeight: '3rem'}], // 42px
        'h2': ['3rem', { lineHeight: '3.6rem'}],     // 48px
        'h1': ['3.25rem', { lineHeight: '3.5rem'}],  // 52px
      },
    },
  },
  plugins: [],
}

