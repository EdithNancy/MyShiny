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
                poppinBold: ['Poppins-Bold', 'sans-serif'],
                poppinMedium: ['Poppins-Medium', 'sans-serif'],
                poppinRegular: ['Poppins-Regular', 'sans-serif'],
                poppinSemiBold: ['Poppins-SemiBold', 'sans-serif'],
                poppinExtraBold: ['Poppins-ExtraBold', 'sans-serif'],
            },
            fontSize: {
                h1: ['17px', '20px'],
                h2: ['20px', '30px'],
                h3: ['25px', '35px'],
                h4: ['35px', '40px'],
            },
        },
    },
    plugins: [],
};
