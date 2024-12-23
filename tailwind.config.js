/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#FFFFFF',
                secondary: '#5843E4',
                tertiary: '#8186A0',
                fourthly: '#F9F9FC',
            },
            fontFamily: {
                montsBold: ['Montserrat-Bold', 'sans-serif'],
                MontsLight: ['Montserrat-Light', 'sans-serif'],
                montsMedium: ['Montserrat-Medium', 'sans-serif'],
                montsRegular: ['Montserrat-Regular', 'sans-serif'],
                montsSemiBold: ['Montserrat-SemiBold', 'sans-serif'],
                montsExtraBold: ['Montserrat-ExtraBold', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
