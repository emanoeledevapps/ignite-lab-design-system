/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors:{
      transparent: 'transparent',
      'black': '#000000',
      'white': '#ffffff',
      gray:{
        900: '#121214',
        800: '#202024',
        600: '#7c7c8a',
        400: '#d1d1d1',
        200: '#e1e1e6'
      },
      cyan:{
        500: '#61daf8',
        300: '#87e5ff',
      }
    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
