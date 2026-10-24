/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9f0ff',
          200: '#bfe4ff',
          300: '#8ad3ff',
          400: '#57b8ff',
          500: '#1559d6',
          600: '#1148af',
          700: '#113d8c',
          800: '#16336d',
          900: '#112753'
        },
        accent: {
          50: '#ecfdf5',
          400: '#3bb273',
          500: '#27a65a',
          600: '#1f8d4b'
        }
      },
      boxShadow: {
        soft: '0 12px 24px rgba(17, 39, 83, 0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
