/** @type {import('tailwindcss').Config} */
module.exports = {


  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {

    
    extend: {
      'animation': {
        'text':'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'button-purple': "#8b46ff",
        'dark-purple': "#0f172a",
        'input-purple': "#1d2537",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin'),


  ],

}