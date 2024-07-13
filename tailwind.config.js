/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333', // Ajusta el color principal aquí
        secondary: '#444', // Ajusta el color secundario aquí
        background: '#333', // Fondo
        text: {
          primary: '#ffffff', // Texto principal
          secondary: '#cccccc', // Texto secundario
        },
      },
    },
  },
  plugins: [],
}
