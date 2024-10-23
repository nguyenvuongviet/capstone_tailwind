/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },

    },
  },
  darkMode: 'class',
  plugins: [],
}