/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060913',
          900: '#0b1120',
          850: '#0f172a',
          800: '#162238',
          700: '#23334d',
        },
        bafs: {
          blue: '#005691',
          navy: '#06203d',
          deep: '#031427',
          sky: '#0284c7',
        },
        gold: {
          champagne: '#f59e0b',
          glow: '#fbbf24',
          accent: '#d97706',
        },
        luminous: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          blue: '#38bdf8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Prompt', 'system-ui', '-apple-system', 'sans-serif'],
        thai: ['Prompt', 'Noto Sans Thai', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-hover': '0 16px 48px 0 rgba(0, 0, 0, 0.6)',
        'cyan-glow': '0 0 25px rgba(6, 182, 212, 0.35)',
        'gold-glow': '0 0 25px rgba(245, 158, 11, 0.35)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '24px',
        '3xl': '40px',
      }
    },
  },
  plugins: [],
}
