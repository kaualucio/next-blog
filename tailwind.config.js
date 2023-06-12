/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#121214',
        background2: '#202024',
        primary: '#9B42F4',
        secondary: '#5D2DE1',
        text: '#fffafa',
        'text-gray': '#9191AB', //ou #B6B6BD
      }
    },
  },
  plugins: [],
}
