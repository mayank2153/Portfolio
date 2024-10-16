// Import flattenColorPalette at the top
const { HiUpload } = require('react-icons/hi');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')


// Define addVariablesForColors function
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

// Export Tailwind CSS configuration
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      sepia:{
        2:"0.3"
      },
      brightness:{
        7:"0.7"
      },
      hueRotate:{
        190:"190deg"
      },
      saturate:{
        15:"1.5"
      },
      colors: {
        bgblue: "#2E2C5D",
        lightblue: "#45DBB7",
        textpink: "#7B3D73"
      }
    },
  },
  plugins: [
    // Use the function directly in the plugins array
    addVariablesForColors,
  ],
};
