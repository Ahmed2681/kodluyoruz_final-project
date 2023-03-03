/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,htm}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
