/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'Montserrat': 'Montserrat , sans-serif',
      'azosans': 'Azo Sans Uber W01 Regular'
    },
    extend: {
      animation: {
        'bntol': 'btn 3s  cubic-bezier(0.19, 1, 0.22, 1)',
        'bright': ' bright 3s infinite cubic-bezier(0.19, 1, 0.22, 1)',
        'myping': ' myping 300ms linear 1',
        'mysping': ' mysping 300ms linear 1',
        'HeroImg': " hearderImg 3s linear infinite",
        'HeroImg2': " hearderImg 4s linear infinite",
        'HeroImg3': " hearderImg 5s linear infinite",
      },
      keyframes: {
        btn: {
          '0%': { right: '0' },
          '100%': { right: '150%' },
        },
        bright: {
          '0%': { right: '0%' },
          '100%': { right: '150%' }
        },
        myping: {
          'from': { scale: '0' },
          'to': { scale: '1' }
        },
        mysping: {
          'from': { scale: '1' },
          'to': { scale: '0' }
        },
        hearderImg: {
          "0%": { "transform ": "translateY(0)" },
          "50%": { "transform ": "translateY(5%)" },
          "100%": { "transform ": "translateY(0)" },
        },
        hearderImg2: {
          "0%": { "transform ": "translateY(0)" },
          "50%": { "transform ": "translateY(5%)" },
          "100%": { "transform ": "translateY(0)" },
        },
        hearderImg3: {
          "0%": { "transform ": "translateY(0)" },
          "50%": { "transform ": "translateY(5%)" },
          "100%": { "transform ": "translateY(0)" },
        },
      },
      backgroundSize: {
        'size': '100% 100%',
      },
    },
  },
  plugins: [],
});

