/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],//el error estaba en colocar el jsx en corchetes
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
