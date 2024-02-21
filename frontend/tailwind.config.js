/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "425px" },
        sm: { max: "768px" },
        lg: { min: "1024px" },
        "2xl": "1440px",
        "3xl": "2560px",
        // xs: { min: "320px", max: "425px" },
        // sm: { min: "426px", max: "767px" },
        // lg: { min: "768px", max: "1024px" },
        // xl: { min: "1025px", max: "1339px" },
        // "2xl": { min: "1440px", max: "2559px" },
        // "3xl": { min: "2560px" },
      },
    },
  },
  plugins: [],
};
