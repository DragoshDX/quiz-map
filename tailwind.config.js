const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      primary: {
        100: '#123d45',
        200: '#235859',
        300: '#346d6d',
        400: '#45827f',
        500: '#012532',
        600: '#011d24',
        700: '#01181c',
        800: '#010f14',
        900: '#01070c',
        DEFAULT: '#012532',
      },
      secondary: {
        100: '#ffc21a',
        200: '#ffcb33',
        300: '#ffd54d',
        400: '#ffde66',
        500: '#FFB800',
        600: '#e6a600',
        700: '#cc9400',
        800: '#b38200',
        900: '#997000',
      },
      accent1: {
        100: '#fa7a3a',
        200: '#fb8c50',
        300: '#fc9e65',
        400: '#fdb07b',
        500: '#F96325',
        600: '#df5720',
        700: '#c54c1b',
        800: '#ab4116',
        900: '#913611',
        DEFAULT: '#F96325',
      },
      accent2: {
        100: '#66e363',
        200: '#76ea73',
        300: '#86f083',
        400: '#96f693',
        500: '#56DC53',
        600: '#4cbc48',
        700: '#42a03e',
        800: '#389434',
        900: '#2e882a',
        DEFAULT: '#56DC53',
      },
      neutral: {
        100: '#8d7a73',
        200: '#9d897d',
        300: '#ad9887',
        400: '#bdb791',
        500: '#7D6B64',
        600: '#6d5f5a',
        700: '#5d5350',
        800: '#4d4746',
        900: '#3d3b3c',
      },
      gray: {
        50: '#ffffff',
        100: '#7c8190',
        200: '#8d91a0',
        300: '#9ea1b0',
        400: '#afb1c0',
        500: '#6b7280',
        600: '#5a6170',
        700: '#495060',
        800: '#384050',
        900: '#273040',
        950: '#161820',
      },
    },
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        '.button': {
          'font-weight': 'bold',
          padding: '0.75rem', // corresponds to py-3
          transition: 'colors',
          'box-shadow': 'inset 0 0 0 0',
          width: '100%',
          display: 'block',
          'border-radius': '0.5rem', // corresponds to rounded-lg
          color: theme('colors.white'),
        },
        '.button-choice': {
          'background-color': theme('colors.primary.500'),
          'box-shadow': `0 2px 4px 0 ${theme('colors.primary.200')}`,
          '&:hover': {
            'background-color': theme('colors.primary.800'),
            'box-shadow': `0 4px 8px 0 ${theme('colors.primary.400')}`,
          },
        },
        '.button-success': {
          'background-color': theme('colors.accent2.500'),
          'box-shadow': `0 2px 4px 0 ${theme('colors.accent2.900')}`,
          '&:hover': {
            'background-color': theme('colors.accent2.900'),
            'box-shadow': `0 4px 8px 0 ${theme('colors.accent2.400')}`,
          },
          'pointer-events': 'none',
        },
        '.button-warning': {
          'background-color': theme('colors.accent1.500'),
          'box-shadow': `0 2px 4px 0 ${theme('colors.accent1.200')}`,
          '&:hover': {
            'background-color': theme('colors.accent1.800'),
            'box-shadow': `0 4px 8px 0 ${theme('colors.accent1.400')}`,
          },
          'pointer-events': 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
