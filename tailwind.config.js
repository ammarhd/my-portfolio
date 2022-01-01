const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "0px",
      sm: "640px",
      md: "885px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        fugaz: ["Fugaz One", "cursive"],
      },
    },
    colors: {
      darkTheme: "#171a23",
      white: {
        900: "#ffffff",
        700: "#C9C9CB",
        500: "#A5A6A9",
        300: "#363B49",
      },
      gray: {
        700: "#8E8E8E",
        900: "#363B49",
      },
      lightTheme: "#ffffff",
      blue: {
        700: "#7899FB",
        900: "#3C6CFF",
        500: "#8859D1",
      },
      black: {
        900: "#000000",
        700: "#404040",
      },
      pink: "#EEE8F6",
    },
  },
  plugins: [],
};
