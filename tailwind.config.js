const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
        Prata: '"Prata", serif',
        Oswald: '"Oswald", sans-serif'
      },
      colors: {
        primary: '#007BFF',
        secondary: '#6B7280',
        // Add more colors as needed
      },
    },
  },
  plugins: [flowbite.plugin(),require('daisyui')],
}

