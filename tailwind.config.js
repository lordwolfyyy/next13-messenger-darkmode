/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
	colours: {'midnight-blue': '#191970',
        'charcoal-gray': '#36454F',
        'deep-plum': '#4B0082',
        'dark-forest-green': '#006400',
        'slate-black': '#2F4F4F',"light_grey":"#CCCCCC"}
},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
