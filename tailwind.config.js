/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#1919FF',
        'secondary':'#7575ff',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)',
        'number-section-background':"url('/assets/images/background image.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

