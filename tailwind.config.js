/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      main: "Gilroy",
      body: "Benegraphic",
      about: "QuigleyWiggly",
    },
    extend: {
      backgroundImage: {
        headImage: "url('/src/Components/Theme/Img/background.png')",
        variant1: "url('/src/Components/Theme/Img/variant1.png')",
        variant2: "url('/src/Components/Theme/Img/Variant2.png')",
        variant1img: "url('/src/Components/Theme/Img/variant1img.png')",
        variant2img: "url('/src/Components/Theme/Img/variant2img.png')",
        questionImage: "url('/src/Components/Theme/Img/question.png')",
      },
      colors: {
        "regular-blue": "#3C6772",
        "f-white": "#FFF7E9",
        "t-pink": "#FDE3B5",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "14px 16px",
          gap: "10px",
          width: "173px",
          height: "50px",
          left: "1203px",
          top: "20px",
          background: "#4E9C7F",
          borderRadius: "199px",
          fontFamily: "Gilroy",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "22px",
          color: "#FFFFFF",
        },
        // ...
      });
    }),
  ],
};
