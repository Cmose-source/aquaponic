/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',
        secondary: '#15803d',
        accent: '#4ade80',
        dark: '#0f172a',
        'status-water': '#047857',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(34, 197, 94, 0.32)',
        'glow-lg': '0 0 40px rgba(34, 197, 94, 0.45)',
      },
    },
  },
  plugins: [],
}
