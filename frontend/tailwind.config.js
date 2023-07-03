/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"]
    },
    fontSize: {
      body:'16px',
      'body-small': '14px',
      'body-micro': '12px'
    },
    container: {
      center: true,
      padding: '1rem',

      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1440px',
      },
    },
    colors: {
      cblue: "#0D6EFD",
      cblueLight: "#E3F0FF",
      cgreen: "#00B517",
      cgreenLight: "#C3FFCB",
      cred: "#FA3434",
      corange: "#FF9017",
      corangeLight: "#FFE5BF",
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

    },
  },
  plugins: [],
}

