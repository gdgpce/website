/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/faqs/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
