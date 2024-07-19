/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "screen/90": "90vh",
      },
      colors: {
        primary: "#000",
        secondary: "#1E2222",
        accent: "#fff",
        // brands
        js: "#EFD81D",
        css: "#254BDD",
        html: "#DD4B25",
        react: "#5ED3F3",
        tailwind: "#15B8C5",
        bootstrap: "#7910F2",
        git: "#E94E31",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
        margin: "margin",
      },
      keyframes: {
        slideIn: {
          "0%": { visibility: "hidden", marginRight: "-16rem" },
          "99%": { visibility: "visible", marginRight: "0" },
          "100%": { visibility: "visible", marginRight: "0" },
        },
        slideOut: {
          "0%": { visibility: "visible", marginRight: "0" },
          "99%": { visibility: "visible", marginRight: "-16rem" },
          "100%": { visibility: "hidden", marginRight: "-16rem" },
        },
      },
      animation: {
        slideIn: "slideIn 0.4s ease-in-out forwards",
        slideOut: "slideOut 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
