/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'',
  purge:{
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode:'class', // 'media' or 'class'
  theme: {
    extend: {},
  },
  variants:{
    extend:{},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}

