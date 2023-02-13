/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'main-blue': '#4C84FF',
                'main-dark': '#0D497F'
            },
            fontFamily: {
                'poppins-sans': ['Poppins', 'sans-serif']
            },
            screens: {
                'xs': '375px',
                ...defaultTheme.screens
            }

        },
    },
    plugins: [],
}
