/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#2ccedf",
        customDark: "#182033",
        customWhite: "#ffffff",   // fixed typo (was 'fffff')
        customGray: "#f5f5f5",
        customLight: "#0064a4",   // renamed for readability
      },
    },
  },
  plugins: [],
};
