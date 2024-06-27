/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Plus Jakarta Sans']
      },
      textColor: {
        'primary1': '#3BB2B8',
        'primary2': '#42E695',
        'dark1': '#297D81',
        'dark2': '#2EA168',
        'secound': '#42CDA8'
      },
      backgroundColor:{
        'primary1': '#3BB2B8',
        'primary2': '#42E695',
        'dark1': '#297D81',
        'dark2': '#2EA168',
        'secound': '#42CDA8',
        'lightest': '#ECFDF4'
      },
      borderColor:{
        'primary1': '#3BB2B8',
        'primary2': '#42E695',
        'dark1': '#297D81',
        'dark2': '#2EA168',
        'secound': '#42CDA8'
      }
    },
  },
  plugins: [],
}