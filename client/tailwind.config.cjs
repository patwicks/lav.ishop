/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#f5904a",
        mainBlack: "#111111",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
