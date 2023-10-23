import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        pink: {
          DEFAULT: '#fd7dbc',
          primary: '#f173ac',
          light2: '#fceff6',
          secondary2: '#f4c6de',
          light: '#faeff5'
        },
        blue: {
          DEFAULT: '#c4e4f6',
          light2: '#f3fafe',
          primary: '#007cc3'
        },
        white: '#fff',
        black: '#000',
        darkgray: '#384b56',
        gray1: '#333',
        gray2: '#7c8e98',
        gray3: '#c4cace',
        gray4: '#e8e9e9',
        gray5: '#bdc3c9',
        error: '#f17373'
      }
    }
  },
  plugins: []
}
export default config
