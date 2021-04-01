const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    node:'layers',
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        emerald:colors.emerald,
        gray: colors.trueGray,
      },
      spacing: {
         '72': '18rem',
         '75': '305px',
         '84': '21rem',
         '96': '24rem',
         '98': '499px',
      },
      fontFamily:{
        'graphic': 'Graphik Web',
      },
      fontSize: {
        'tiny': '8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
