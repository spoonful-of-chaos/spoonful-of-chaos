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
      transitionProperty: {
        'max-height': 'max-height'
      },
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
          dark: '#970037'
        },
        'ghost': '#e8e9f3',
        'moonstone': {
          DEFAULT: '#21dbf3',
          light: '#8ffef9',
          dark: '#147490'
        },
        'crayola': {
          DEFAULT: '#ff8752',
          light: '#ffae8a',
          dark: '#c84810'
        },
        'goldenrod': {
          DEFAULT: '#fca727',
          light: '#f4e282',
          dark: '#d55516'
        },
        'raisin': '#18051c'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  safelist: [{
    pattern: /(bg|text|border)-(spoon|moonstone|ghost|crayola|goldenrod|raisin)/
  }]
}
