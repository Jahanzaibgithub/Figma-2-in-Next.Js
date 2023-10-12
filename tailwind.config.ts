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
      'xs': '320px',
      // => @media (min-width: 320px) { ... }
       
        'xlg': '1135px',
      // => @media (min-width: 1135px) { ... }  

            'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
     extend: 
     
    {
      textColor: {
        'second-text': 'var(--second-text, #374754)',
         'custom-text-color': 'var(--text, #252B42)',
      },
      backgroundColor: {
        'primary': 'var(--Primary, #2091F9)',
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