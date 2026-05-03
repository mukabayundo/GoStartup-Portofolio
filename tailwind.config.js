/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#4A6CF7', dark: '#3a5ce6' },
        brand:   '#090E34',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      keyframes: {
        fadeUp:   { '0%': { opacity: '0', transform: 'translateY(32px)' },  '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeDown: { '0%': { opacity: '0', transform: 'translateY(-20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        zoomIn:   { '0%': { opacity: '0', transform: 'scale(0.92)' },       '100%': { opacity: '1', transform: 'scale(1)' } },
        floatY:   { '0%,100%': { transform: 'translateY(0)' },              '50%':  { transform: 'translateY(-12px)' } },
        pulsRing: { '0%,100%': { boxShadow: '0 0 0 0 rgba(74,108,247,0.5)' }, '60%': { boxShadow: '0 0 0 14px rgba(74,108,247,0)' } },
        shimmer:  { '0%': { backgroundPosition: '200% center' },            '100%': { backgroundPosition: '-200% center' } },
      },
      animation: {
        fadeUp:   'fadeUp 0.75s cubic-bezier(.22,.68,0,1.2) forwards',
        fadeDown: 'fadeDown 0.5s ease forwards',
        fadeIn:   'fadeIn 0.6s ease forwards',
        zoomIn:   'zoomIn 0.65s cubic-bezier(.22,.68,0,1.2) forwards',
        floatY:   'floatY 4s ease-in-out infinite',
        pulsRing: 'pulsRing 2.2s ease-in-out infinite',
        shimmer:  'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
