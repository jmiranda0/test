/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#9b9b9b',
        customDarkGray1: '#343436',
        customDarkGray2: '#2f2f31',
        customDarkerGray: '#2b2b2d',
        customYellow: '#f3c26b',
      },
    },
  },
  plugins: [],
}
