/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },backgroundImage:(theme)=>({
        "home": "url('/images/background.png')",
      })
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
