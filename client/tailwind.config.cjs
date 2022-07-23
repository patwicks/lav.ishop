/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#f5904a",
        mainBlack: "#111111",
        whitegray: {
          100: "#FFFFFF",
          200: "#E6E6E6",
          300: "#CCCCCC",
          400: "#999999",
          500: "#333333",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: ["responsive", "hover", "focus", "active"],
  plugins: [require("tailwind-scrollbar-hide")],
};
