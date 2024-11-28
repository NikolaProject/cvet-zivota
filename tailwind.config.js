/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: {
      
     
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'zuta': '#f2bf3b',
        'zelena': '#676E4B',
        'crna': '#262626',
        'siva': '#EBEBEB',
        
        
        
      },
      screens:{
        sm: '480px',
        md: '768px',
        lg: '1140px',
        xl: '1280px',
        
      },
      fontFamily:{
        opensans:['Open Sans', 'sans-serif'],
        velikaslova:['Abril Fatface', 'cursive'],
        montaga:['Montaga', 'open-sans']
      },
      backgroundImage:{
        hero: "url('../public/img/hero.png')",
        herosecound: "url('../public/img/obukahero.png')",
        nasiprojekti: "url('../public/img/Nasi projekti.png')",
        onama: "url('../public/img/O udruzenju.png')",
        statistika: "url('../public/img/statistika.png')",
        kontakt: "url('../public/img/Kontak.png')",
        herodva: "url('../public/img/hero2.png')",
        herotri: "url('../public/img/hero3.png')",
        heroosam: "url('../public/img/image 11.png')",
        meditacija: "url('../public/img/image 8.png')"
      },
     menuIcon: {
      menu: "url('../public/img/Vector.svg')",
     },
     
    }
    ,
  },
  plugins: [],
}
