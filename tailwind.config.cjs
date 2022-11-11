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
      primary: "#0075ff",
      primarysoft: "#6997db",
      secondary: "#6c757d",
      success: "#157347",
      danger: "#dc3545",
      dark: "#212529",
    },
    extend: {},
  },
  plugins: [],
};
