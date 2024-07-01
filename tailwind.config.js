/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom':"0px 2px 11px rgba(0,0,0,0.06)",

      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(180deg, #414449 1.31%, #1f1f1f 101.06%)',
        'homeImage':"url('https://pindballuchi.com/wp-content/uploads/2021/12/Webv-interior-1.jpg')",
        'vegstarter':"url('https://pindballuchi.com/wp-content/uploads/2021/10/Dahi-De-Kebab-2-1-scaled.jpg')"

      },
      transitionProperty: {
        'height': 'height',
      },
      fontFamily:{
        'menuHeading':"ZCOOL XiaoWei",
        'vegStarter':"Cookie",
      }
    },
  },
  plugins: [],
}