/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        primary: "#4f46e5",
        primarysoft: "#0069e5",
        secondary: "#848b95",
        selection: "#ffcc66db",
        success: "#157347",
        danger: "#dc3545",
        dark: "#1f2937",
        white: "#fff",
        black: "#000",
      },
    
    },
  },
  plugins: [],
};
