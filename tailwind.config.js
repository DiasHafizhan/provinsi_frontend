/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container :{
      center : true,
      padding :'3%'
    },
    extend: {
      colors: {
        'btn' : '#F1F1F3',
        'button' : '#FF9500',
        'primary' : '#236D97',
        'card' : '#FBF8F8',
      }
    },
  },
  plugins: [],
}

