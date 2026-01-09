/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./js/**/*.js"],
    theme: {
        extend: {
            colors: {
                brand: {
                    500: '#6C4CF0',
                    600: '#4B3BD6',
                    active: '#651FFF',
                },
                text: {
                    900: '#0b1220',
                },
                muted: '#6b7280',
                nav: '#5f6368',
                "fuschia-100": "var(--fuschia-100)",
                "fuschia-60": "var(--fuschia-60)",
                "fuschia-80": "var(--fuschia-80)",
                "iris-100": "var(--iris-100)",
                "iris-60": "var(--iris-60)",
                "iris-80": "var(--iris-80)",
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
                sans: ['Inter', 'system-ui', 'sans-serif'],
                body: "var(--body-font-family)",
                "header-1": "var(--header-1-font-family)",
                "header-2": "var(--header-2-font-family)",
            }
        },
    },
    plugins: [],
}
