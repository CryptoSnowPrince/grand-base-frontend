/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Sarpanch", ...fontFamily.sans],
        secondary: ["Satoshi", ...fontFamily.sans],
      },
      colors: {
        theme: {
          DEFAULT: "#001123",
        },
        accent: {
          blue: "#107ABA",
        },
        text: {
          gray: "#B6B6B6",
        },
      },
      backgroundImage: {
        blueGradient: "linear-gradient(235deg, #5581F7 1.71%, #071EA9 94.68%)",
      },
    },
  },

  plugins: [],
};
