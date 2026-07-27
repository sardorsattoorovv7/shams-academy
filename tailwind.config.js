/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'shams-blue': {
          light: '#0A53D9',
          DEFAULT: '#0037B8',
          dark: '#00278A',
        },
        'shams-gold': {
          light: '#FFD54A',
          mid: '#FFB300',
          dark: '#F59E0B',
        },
        'shams-navy': {
          DEFAULT: '#081633',
          soft: '#233457',
        },
        ink: {
          DEFAULT: '#081633',
          soft: '#4A5670',
          faint: '#8A93A6',
        },
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(8, 22, 51, 0.12)',
        'card-hover': '0 18px 40px -14px rgba(8, 22, 51, 0.2)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      fontFamily: {
        trajan: ['"Trajan Pro"', '"Cinzel"', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}
