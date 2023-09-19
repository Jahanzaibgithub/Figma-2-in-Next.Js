const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    screens: {
      'xs': '340px',
      // => @media (min-width: 340px) { ... }

      'xs2': '480px',
      // => @media (min-width: 480px) { ... }
      ...defaultTheme.screens,
    },
     extend: 
    {
      backgroundImage: {
        "banner-bg": "url('../public/assets/bannerBg.jpeg')",
      },
      colors: {
        hoverColor: "#ffaa17",
        darkRed: "#ea0638",
      },
    },
  },
  plugins: [],
};