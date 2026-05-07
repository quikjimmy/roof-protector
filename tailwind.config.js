/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0F1923',
          DEFAULT: '#0F1923',
        },
        secondary: {
          bg: '#1A2530',
          DEFAULT: '#1A2530',
        },
        accent: '#00C2FF',
        success: '#22C55E',
        warning: '#F59E0B',
        border: '#2D3F50',
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
