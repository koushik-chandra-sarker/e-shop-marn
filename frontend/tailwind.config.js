import colors from "tailwindcss/colors.js";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"]
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '740px',
        lg: '984px',
        xl: '1240px',
      },
    },
    colors: {
      ...colors,
      cblue: "#0D6EFD",
      'cblue-light': "#E3F0FF",
      cgreen: "#00B517",
      'cgreen-light': "#C3FFCB",
      cred: "#FA3434",
      corange: "#FF9017",
      'corange-light': "#FFE5BF",
      cgray:{
        100: '#F7FAFC',
        200: '#EFF2F4',
        300: '#DEE2E7',
        400: '#BDC4CD',
        500: '#8B96A5',
        600: '#505050',
        700: '#1C1C1C',
      }
    },
    extend: {
      fontSize: {
        body:'16px',
        'body-small': '14px',
        'body-micro': '12px'
      },
    },
  },
  plugins: [],
}

