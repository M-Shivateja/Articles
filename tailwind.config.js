/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path as per your project structure
  ], // Adjust paths as needed
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Comic Neue"', "sans-serif"],
      },
      colors: {
        primary: "#305050",
        secondary: "#FF5E5B",
        terinary: "#EDC9AF",
        important_text: "#002147",
        highlight_background: "#F4F4F9",
      },
    },
  },
  plugins: [],
};
