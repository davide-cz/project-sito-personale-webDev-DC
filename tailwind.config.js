/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      /* aggiungi nuovi colori qua
      */
      colors:{
        prim:'#00415a',
        second:'#00719c',
        terz:'#001f2b',
        quart:'#e1f1fd'
      },
    },
  },
  plugins: [
   require('tailwindcss-animated')
  ],
}

