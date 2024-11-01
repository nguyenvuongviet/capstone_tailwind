/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        xl: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      inset: {
        "10%": "10%",
        "20%": "20%",
        "5%": "5%",
        "-4rem": "-4rem",
      },
      width: {
        "120%": "120%",
      },
      animation: {
        spin: "spin 20s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
