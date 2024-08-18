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
        photoshop: "#30A7FE",
        figma: "#E44A40",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
        margin: "margin",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translate(0, 1.5rem)" },
          "100%": { opacity: "1", transform: "translate(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
