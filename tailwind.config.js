// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
      colors: {
        default: "#2A2B38",

        "bg-blue-gray": "#98ABBD",
        "bg-dark": "#2A2B38",
        "bg-light-gray": "#F9FBFD",

        "btn-github-bg": "#40414D",
        "btn-github-text": "#FFFFFF",
        "btn-rose-bg": "#FFE5E5",
        "btn-rose-text": "#202874",
        "btn-blue-bg": "#1868C0",
        "btn-blue-text": "#FFFFFF",
        "btn-blue-gray-bg": "#808FA0",
        "btn-blue-gray-text": "#2A2B38",
        "btn-dark-blue-bg": "#2C3258",
        "btn-dark-blue-text": "#7DB9FF",
        "btn-red-bg": "#4D2D37",
        "btn-red-text": "#FF7D7D",

        "heading-primary": "#202874",
        "heading-light": "#98ABBD",

        "flag-yellow": "#FFD700",
        "flag-blue": "#0057B7",

        "dark-gray": "#555560",
        "light-gray": "#E6EBF0",
        blue: "#1868C0",
        "dark-blue": "#202874",
        red: "#D93535",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
