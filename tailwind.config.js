/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],

  theme: {
    container : {
      center : true,
      padding : '16px',
    },

    screens: {
      'sm': '600px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1320px',
    },

    extend: {
      fontFamily : {
        "nunito" : ["Nunito"],
        "nunito-sans" : ["Nunito Sans"],
        "inter" : ["Inter"]
      },

      colors : {
        "background" : "#f5f5f5",
        "green-primary" : "#23B16D",
        "cokelat" : "#9F8772",
        "hitam-primary" : "#030319",
        "hitam-pucat" : "#535353",
        "hitam-secondary" : "#2B0913"
      }
    },
  },

  plugins: [require('tw-elements/dist/plugin')],
}
