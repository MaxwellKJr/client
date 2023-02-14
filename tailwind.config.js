/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: '#ff0077',
			},
			fontFamily: {
				display: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
