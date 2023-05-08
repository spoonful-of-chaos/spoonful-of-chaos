/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Source Serif Pro'],
        'display': ['Bebas Neue'],
        'sans': [...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...colors,
        'spoon': {
          DEFAULT: '#ec3c7b',
          light: '#F8B5CC'
        },
        'ghost': '#e8e9f3',
        'moonstone': '#429EA6',
        'crayola': '#F45B69'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
