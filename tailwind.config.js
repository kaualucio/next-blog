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
        background: '#F4F4F4',
        background2: '#fffafa',
        'dark-gray': '#28282b',
        primary: '#FF1734',
        // secondary: '#5D2DE1',
        // text: '#fffafa',
        dark: '#00120b',
        'text-gray': '#9191AB', //ou #B6B6BD
      }
    },
  },
  plugins: [],
}
