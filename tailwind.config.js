// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/components/tailwind/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--secondary)",
        secondary: "var(--primary)",
        background: "var(--primary)",
        foreground: "var(--secondary)",
      }
    },
  },
  plugins: [nextui()],
}
