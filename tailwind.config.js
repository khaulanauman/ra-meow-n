/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('/images/main-bg.png')",
      },
      fontFamily: {
        pixelify: ['Pixelify Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
