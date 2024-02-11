/** @type {import('tailwindcss').Config} */
export default {
  content: [
  // "./src/**/*.{ts,tsx}",
  // "./node_modules/tw-elements-react/dist/js/**/*.js"
  
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",



  ],
  theme: {
    extend: {},
    
  colors: {
    primary:"#EB0E31",
    secondary: "#00000",
    white: "#fff"
  },
  screens: {
    xs: { min: "300px", max: "420px" },
    sm: { min: "425px", max: "767px" },
    md: { min: "768px", max: "1023px" },
    lg: { min: "1024px", max: "1279px" },
    xl: { min: "1280px", max: "1535px" },
    "2xl": { min: "1536px" },
  },
  },
  plugins: [],
}

