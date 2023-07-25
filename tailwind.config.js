/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGrayColor: "#F3F1F3",
        darkGrayColor: "#E6E6EA",
        blueColor: "#334EFF",
      },
    },
  },
  plugins: [],
};
