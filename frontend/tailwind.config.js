/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      extend: {
          colors: {
              'text-primary': '#000000',
              'text-secondary': '#555555',
              'text-white': '#DDDDDD',
              'primary': '#344E41',
              'secondary': '#a3b18a',
              'tertiary': '#dad7cd',
              'grayscale-primary': '#343A40',
              'grayscale-secondary': '#495057',
              'grayscale-tertiary': '#ADB5BD',
              'light-grayscale-primary': "#F8F9FA",
              'light-grayscale-secondary': "#E9ECEF",
              'light-grayscale-tertiary': "#DEE2E6"
          },
          animation: {
              'spin-slow': 'spin 3s linear infinite',
          },
          screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
            'short': {'raw': '(max-height: 553px)'}
          }      
      },
  },
  plugins: [],
};
