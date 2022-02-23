const path = require('path')

module.exports = {
  plugins: [
    require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js')),
    require('autoprefixer'),
  ],
}

// What do you mean you do not like turtles?!