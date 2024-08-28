/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      unbounded: ['Unbounded'],
      roboto: ['Roboto'],
    },
    colors: {
      black: '#242424',
      purple: '#923EA1',
      pink: '#D17CE0',
      white: '#F8F4F3',
    },
    extend: {},
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '150%': '150%',
      '145%': '145%',
      '100%': '100%',
      '50%': '50%',
      '48%': '48%',
      '45%': '45%',
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
