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
        'display': ['Bebas Neue', 'sans-serif'],
        'serif': ['Source Serif Pro'],
        'sans': ['Source Serif Pro',...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...colors,
        'spoon': {
          DEFAULT: '#ec3c7b',
          light: '#F8B5CC',
          dark: '#CC1455'
        },
        'ghost': '#e8e9f3',
        'moonstone': {
          DEFAULT: '#429EA6',
          light: '#8ACBD0',
          dark: '#347D83'
        },
        'crayola': '#FF7E47'
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
