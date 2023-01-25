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
      primary: "#4f46e5",
      primarysoft: "#0069e5",
      secondary: "#666",
      selection: "#ffcc66db",
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
