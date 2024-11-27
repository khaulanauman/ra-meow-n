/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    backgroundImage: {
      'main-background': "url('/images/main-bg.png')",
    },
    fontFamily: {
      'pixelify': ['"Pixelify Sans"', 'sans-serif'], // Use the font family name as specified
    },
  theme: {
    extend: {},
  },
  plugins: [],
}

