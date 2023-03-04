/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,htm}"],
  theme: {
    extend: {
      screens: {
        "mobile-s": "320px",

        "mobile-m": "375px",

        "mobile-l": "425px",
      },
    },
  },
  plugins: [],
};
