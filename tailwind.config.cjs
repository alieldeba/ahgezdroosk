/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      "primary": "#0075ff",
      "success": "#4BB543",
    },
    extend: {},
  },
  plugins: [],
};
