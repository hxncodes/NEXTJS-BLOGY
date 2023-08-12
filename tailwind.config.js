/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "574px",
      md: "767px",
      lg: "992px",
      xl: "1280px",
    },
    extend: {
      colors: {
        lightGrayColor: "#F3F1F3",
        darkGrayColor: "#E6E6EA",
        blueColor: "#334EFF",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
