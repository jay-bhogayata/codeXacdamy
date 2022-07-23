/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      

      'md': '800px',
      
      'lg': '1280px',
      
    },
  },
  plugins: [
   
  ],
}
