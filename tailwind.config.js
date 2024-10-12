/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navyBlue: "#2C3E50",
        customTeal: "#1ABC9C",
        coral: "#E74C3C",
        lightGray: "#ECF0F1",
        charcoal: "#34495E",
        darkGray: "#7F8C8D",
        customGreen: "#27AE60",
      },
    },
  },
  plugins: [],
};
