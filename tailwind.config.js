const heroPatterns = require('tailwindcss-hero-patterns/src/patterns')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
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
      indigo: colors.indigo,
      gray: colors.zinc,
      purple: colors.violet,
      red: colors.rose,
      blue: colors.blue,
      pink: colors.pink,
      emerald: colors.emerald,
      green: {
        200: '#355e3b',
      },
      yellow: {
        200: '#Eedd82',
        400: '#B8860b',
      },
      cyan: {
        400: '#B45A1A',
        500: '#8B4513',
        600: '#A77197',
        700: '#5F1E6F'
      },
    },
    heroPatterns: {
      topography: heroPatterns.topography,
      rain: heroPatterns.rain,
      bamboo: heroPatterns.bamboo,
    },
    heroPatternsShades: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    heroPatternsColors: ['green', 'yellow', 'gray', 'indigo', 'purple'],
  },
  plugins: [require('tailwindcss-hero-patterns')],
}
