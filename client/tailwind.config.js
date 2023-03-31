/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        green: "#7f63d7",
        dark: "#010126",
        blue: "#589ee4",
        yell: "#fdcc4a",
        "black-0.5": "rgba(0, 0, 0, 0.5)",
        "white-0.5": "rgba(255, 255, 255, 0.5)",
        "blue-hover": "#81bdf5",
        "dark-blue": "#345566",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue": "linear-gradient(to right, #ffffff, #fff)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        // brush: "url('./assets/brush.png')",
        // person1: "url('./assets/person-1.png')",
        // person2: "url('./assets/person-2.png')",
        // person3: "url('./assets/person-3.png')",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
