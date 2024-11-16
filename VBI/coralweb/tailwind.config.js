/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        header:'560px',
        rate:'400px',
      },
      
      fontSize:{
        h1:'2.6rem',
      },
      screens:{
        xs:'475px',
      },
    },
  },
  plugins: [],
}

