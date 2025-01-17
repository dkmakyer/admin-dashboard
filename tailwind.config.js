/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customOrange: "#ffb832",
        customOutline: "rgba(0, 0, 0, 0.2)",
      }
    },
  },
  plugins: [],
}