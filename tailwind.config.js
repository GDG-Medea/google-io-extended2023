/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
// const { colors: defaultColors } = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors")

// const colors = {
//   ...defaultColors,
//   ...{
//     ggreen: {
//       100: "#ccf1dc",
//       200: "#99e3b9",
//       300: "#66d597",
//       400: "#33c774",
//       500: "#00b951",
//       600: "#009441",
//       700: "#006f31",
//       800: "#004a20",
//       900: "#002510"
//     },
//     gred: {
//       100: "#ffd0d6",
//       200: "#ffa1ad",
//       300: "#ff7384",
//       400: "#ff445b",
//       500: "#ff1532",
//       600: "#cc1128",
//       700: "#990d1e",
//       800: "#660814",
//       900: "#33040a"
//     },
//     gblue: {
//       100: "#dee1ff",
//       200: "#bdc3ff",
//       300: "#9da5ff",
//       400: "#7c87ff",
//       500: "#5b69ff",
//       600: "#4954cc",
//       700: "#373f99",
//       800: "#242a66",
//       900: "#121533"
//     },
//     gyellow: {
//       100: "#fff3cc",
//       200: "#ffe799",
//       300: "#ffdc66",
//       400: "#ffd033",
//       500: "#ffc400",
//       600: "#cc9d00",
//       700: "#997600",
//       800: "#664e00",
//       900: "#332700"
//     },
//   }
// }

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    screens: {
      'tablet': '1024px',
 
      
    },
  },

    extend: {
      colors: {
        ...colors,
        bglight: "#ffffff",
        bgdark: "#202124",
        ggreen: {
          100: "#ccf1dc",
          200: "#99e3b9",
          300: "#66d597",
          400: "#33c774",
          500: "#00b951",
          600: "#009441",
          700: "#006f31",
          800: "#004a20",
          900: "#002510"
        },
        gred: {
          100: "#ffd0d6",
          200: "#ffa1ad",
          300: "#ff7384",
          400: "#ff445b",
          500: "#ff1532",
          600: "#cc1128",
          700: "#990d1e",
          800: "#660814",
          900: "#33040a"
        },
        gblue: {
          100: "#dee1ff",
          200: "#bdc3ff",
          300: "#9da5ff",
          400: "#7c87ff",
          500: "#5b69ff",
          600: "#4954cc",
          700: "#373f99",
          800: "#242a66",
          900: "#121533"
        },
        gyellow: {
          100: "#fff3cc",
          200: "#ffe799",
          300: "#ffdc66",
          400: "#ffd033",
          500: "#ffc400",
          600: "#cc9d00",
          700: "#997600",
          800: "#664e00",
          900: "#332700"
        },
      },

    },
    plugins: [],
    darkMode: ["class"]
  }
}
)
