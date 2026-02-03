/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf4',
          100: '#c2cde3',
          200: '#9aadd0',
          300: '#728dbd',
          400: '#5375af',
          500: '#355da1',
          600: '#2f5599',
          700: '#274b8f',
          800: '#204185',
          900: '#0a1628',
        },
        accent: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#f59e0b',
          600: '#e68a00',
          700: '#cc7a00',
          800: '#b36b00',
          900: '#995c00',
        },
        navy: {
          900: '#0a1628',
          800: '#0f172a',
          700: '#1e293b',
          600: '#334155',
        },
        'runlytics-blue': '#2563eb',
        'runlytics-blue-light': '#60a5fa',
        'runlytics-gold': '#f59e0b',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a1628 0%, #1e293b 50%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
}
