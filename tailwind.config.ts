const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
    theme: {

     extend: 
     
    {
      textColor: {
        'second-text': 'var(--second-text, #374754)',
         'custom-text-color': 'var(--text, #252B42)',
      },
      backgroundImage: {
        "banner-bg": "url('../public/assets/bannerBg.jpeg')",
      },
     
      colors: {
        hoverColor: "#ffaa17",
        darkRed: "#ea0638",
          Gray4: '#535052',
           Gray5: '#323031',
                blue: {
          'custom': '#084C61', // Define your custom blue color
        },
      },
    },
  },
  plugins: [],
};