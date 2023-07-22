/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFAF01",
        secondary: "#7D3838",
        darkBg: "#181818",
        primaryDark: "#EE7E36",
        grayAccent: "#707070",
        purpleAccent: "#4E4182",
        blueAccent: "#75DEFE",
        redAccent: "#E36852",
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["The Rumor", "sans-serif"],
        display: ["Jura", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
};
