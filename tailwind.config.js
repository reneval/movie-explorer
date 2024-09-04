/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  themes: ["light", "dark", "cupcake"],
};
