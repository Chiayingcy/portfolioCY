import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#f5f2ee',
          2: '#edeae4',
          3: '#e4e0d8',
          dark: '#0e1018',
          dark2: '#14161e',
          dark3: '#1e2230',
        },
        ink: {
          DEFAULT: '#1a1714',
          2: '#3d3830',
        },
        accent: {
          DEFAULT: '#c8622a',
          light: '#e8924a',
        },
        muted: {
          DEFAULT: '#8a8278',
          2: '#b5b0a8',
        },
        trading: '#b8860b',
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        ticker: 'ticker 30s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
