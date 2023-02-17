/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '@@/src/components/**/*.{js,vue,ts}',
        '@@/src/iayouts/**/*.vue',
        '@@/src/pages/**/*.vue',
        '@@/src/plugins/**/*.{js,ts}',
        '@@/src/nuxt.config.{js,ts}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'Ibara-sans': ['Ibarra Real Nova, serif;'],
                'Shure-Tech-sans': ['Shure Tech Mono, serif'],
                'Public-sans-serif': ['Public Sans, sans-serif'],
                'Open-Dyslex-Alta-serif': ['Open Dyslexic Alta, sans-serif'],
                'Open-Dyslex-serif': ['Open Dyslexic, sans-serif'],
                'Open-Dyslex-Mono-serif': ['Open Dyslexic Mono, sans-serif']
            },
            colors: {
                'blue-charcoal': {
                    50: '#0F58C6',
                    100: '#0D50B3',
                    200: '#0A3F8D',
                    300: '#082E67',
                    400: '#051D41',
                    500: '#020C1B'
                },
                'blue-zodiac': {
                    50: '#2A6AC6',
                    100: '#2761B6',
                    200: '#1F4F94',
                    300: '#183D72',
                    400: '#112B51',
                    500: '#0A192F'
                },
                aquamarine: {
                    200: '#DEFFF7',
                    300: '#B6FFED',
                    400: '#8DFFE4',
                    500: '#64FFDA',
                    600: '#2CFFCD',
                    700: '#00F3B9',
                    800: '#00BB8E',
                    900: '#008363'
                },
                'moon-raker': '#CCD6F6'
            },
            backgroundImage: {
                photo: "url('@@/src/assets/images/photo.png')"
            }
        }
    }
}
