/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        md: [
          '0.95rem',
          {
            lineHeight: '1.5rem',
          },
        ],
      },
      colors: {
        primary: '#FDFFE2',
        secondary: '#1230AE',
        accent: '#F5004F',
        neutral: '#040d12',
      },
    },
  },
  plugins: [],
};
