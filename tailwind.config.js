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
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-hacknf)']
      },
      gridTemplateColumns: {
        bento: '1.9fr 1fr 1.9fr',
        auto: 'repeat(auto-fill, minmax(150px, auto))'
      },
      gridTemplateRows: {
        bento: 'repeat(3, 320px)'
      },
      keyframes: {
        comet: {
          to: {
            transform: 'translateX(-942px)'
          }
        }
      },
      animation: {
        comet: 'comet 1s steps(3) infinite'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/typography')
  ]
}
