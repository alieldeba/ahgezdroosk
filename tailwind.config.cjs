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
      primary: "#0069e5",
      primarysoft: "#6997db",
      secondary: "#666",
      success: "#157347",
      danger: "#dc3545",
      dark: "#212529",
      white: "#fff",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
};
