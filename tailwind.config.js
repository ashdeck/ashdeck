import { COLORS } from "./src/commons/utils"

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'outfit': ["Outfit"],
      "sans": ["Poppins"],
      "heading": ["Didact Gothic"],
    },
    extend: {
      colors: {
        ...COLORS,
      }
    },
  },
  plugins: [],
}

