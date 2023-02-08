/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D0409',
        secondary: {
          900: '#121212',
          800: '#181818',
          400: '#363F44'
        },
        accent: {
          1: '#259D97',
          2: '#1F6E73',
          3: '#1A6A87'
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      }
    }
  },
  plugins: []
}
