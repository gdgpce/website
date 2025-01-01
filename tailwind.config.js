// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/app/faqs/*.{js,ts,jsx,tsx}",
   "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--primary)",
        foreground: "var(--secondary)",
      },
    },
  },
  plugins: [nextui()],
}
