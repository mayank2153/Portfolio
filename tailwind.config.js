// Import flattenColorPalette at the top
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
