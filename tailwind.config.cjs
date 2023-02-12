/** @type {import('tailwindcss').Config} */
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
            }

        },
    },
    plugins: [],
}
