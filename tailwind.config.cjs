/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundColor: {
        "custom-black": "rgb(18,18,18)",
      },
      backgroundImage: {
        home: "url(assets/images/bannerbg.png)",
        gradiant1: "url(assets/images/colorsharp.png)",
        gradiant2: "url(assets/images/colorsharp2.png)",
      },
      textColor: {
        "custom-blue": "rgb(58, 175, 222)",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
