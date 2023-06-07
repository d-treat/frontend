/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
<<<<<<< HEAD
=======
      colors:{
        'primary': {
          '100':'#218D82'
        },
        'secondary': {
          '100':'#2B4360'
        }
      }
>>>>>>> 9380225fdfaa20906e719ccb3df505b969427276
    },
  },
  plugins: [],
}
