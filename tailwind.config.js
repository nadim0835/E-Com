/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1604px',
      },
      colors: {
        primary: '#262626',
        secondary:'#767676',
        white:'#FFF'
      },
      fontFamily: {
        dmSans: ['DM Sans','sans-serif'],
      },
    },
  },
  plugins: [],
}

