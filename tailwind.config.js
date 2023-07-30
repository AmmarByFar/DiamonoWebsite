/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        taneikaColor: "#A63F3F",
        arcshotsColor: "#2F798C",
        magettiColor: "#5F51B9",
        gornaughtColor: "#DCC581",
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["The Rumor", "sans-serif"],
        display: ["Jura", "sans-serif"],
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
};
