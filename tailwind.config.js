const defaultTheme = require('tailwindcss/defaultTheme')
const heroPatterns = require('tailwindcss-hero-patterns/src/patterns')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {backgroundImage: theme => ({
    //   backgroundImage: {
    //     'pack-train': "url('../images/packTrain.JPG')",
    // },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      blue: colors.blue,
      green: {
        200: '#355e3b',
      },
      yellow: {
        200: '#Eedd82',
        400: '#B8860b',
      },
    },
    heroPatterns: {
      topography: heroPatterns.topography,
      endlessclouds: heroPatterns.endlessclouds,
    },
    heroPatternsShades: ['200', '400'],
    heroPatternsColors: ['green', 'yellow', 'gray'],
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-hero-patterns')],
}
