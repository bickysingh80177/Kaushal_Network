/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "768px",
        lg: "1024px",
        "2xl": "1440px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
};
