/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "purple-gradient":
          "linear-gradient(121.27deg, #B3B1B6 6.73%, #B797FF 47.74%, #B4ADC3 101.94%)",
      },
      fontFamily: {
        bigJohn: ["BigJohn", "cursive"],
        slimJoe: ["SlimJoe", "cursive"],
        robotoLight: ["Roboto-Light", "sans-serif"],
        robotoRegular: ["Roboto-Regular", "sans-serif"],
        robotoBold: ["Roboto-Bold", "sans-serif"],
        interSemiBold: ["Inter-SemiBold", "sans-serif"],
        interRegular: ["Inter-Regular", "sans-serif"],
      },
      colors: {
        darkBlue: "#020033",
        blue: "#00067D",
        mint: "#A5B9B6",
        lighterPurple: "#AAA3FF",
        purple: "#968FFF",
        lightPurple: "#A798FF",
        lightPurple2: "#AAA7F4",
        sideBarBg: "#FAFAFD",
        gray500: "#556987",
        gray100: "#EEF0F3",
      },
      boxShadow: {
        ligher: "inset 0 0 0 10em rgba(255, 255, 255, 0.2)",
        right: "5px 0px 7px 0px rgba(0, 0, 0, 0.2)",
        priceBorder: "0px 0px 0px 2px #4F46E5",
      },
    },
  },
  plugins: [],
};
