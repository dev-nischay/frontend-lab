/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGrey: {
          200: "rgb(26,26,26)",
          300: "rgb(38,38,38)",
          400: "rgb(40,40,40)",
          450: "rgb(44,44,44)",
          500: "rgb(51,51,51)",
          550: "rgb(56,56,56)",
          650: "rgb(68,67,67)",
          700: "rgb(160,160,160)",
        },
      },
    },
  },
  plugins: [],
};
