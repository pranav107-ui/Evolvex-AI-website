/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./js/**/*.js"],
    theme: {
        extend: {
            colors: {
                brand: {
                    500: '#6C4CF0',
                    600: '#4B3BD6',
                    // nav active color
                    active: '#651FFF',
                },
                text: {
                    900: '#0b1220',
                },
                muted: '#6b7280',
                nav: '#5f6368', // nav link default
            },
            maxWidth: {
                'container': '1200px',
            },
            borderRadius: {
                'DEFAULT': '12px',
            },
            transitionTimingFunction: {
                'DEFAULT': 'ease',
            },
            transitionDuration: {
                'DEFAULT': '200ms',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'], // best effort match
            }
        },
    },
    plugins: [],
}
