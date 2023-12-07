/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /*Aqui se puede agregar nuevos colores*/
        "blue-dark": "#2f536e",
        "black-transparent": "rgba(0,0,0,0.9)",
      },
    },
    boxShadow: {
      navigationbar:
        "0px 0px 10px 0px rgba(80, 80, 80, 0.1), 0 2px 2px -1px rgba(3,3,4,0.05)",
    },
  },
  plugins: [],
};
