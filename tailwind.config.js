const heroPatterns = require('tailwindcss-hero-patterns/src/patterns')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'cursive': ['"Permanent Marker"', 'cursive'],
      'chalk': ['"Gloria Hallelujah"', 'cursive'],
     },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      blue: colors.blue,
      pink: colors.pink,
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
      rain: heroPatterns.rain,
    },
    heroPatternsShades: ['200', '400'],
    heroPatternsColors: ['green', 'yellow', 'gray', 'indigo'],
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-hero-patterns')],
}
