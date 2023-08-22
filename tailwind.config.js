/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial-t':
          'radial-gradient(circle at top, var(--tw-gradient-stops))'
      },
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
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-hacknf)']
      },
      gridTemplateColumns: {
        bento: '1.9fr 1fr 1.9fr'
      },
      gridTemplateRows: {
        bento: 'repeat(3, 320px)'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
