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
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  variants: ["responsive", "hover", "focus", "active"],
  plugins: [require("tailwind-scrollbar-hide")],
}
