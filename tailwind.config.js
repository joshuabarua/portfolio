/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	experimental: {textDecorationStyles: true},
	theme: {
		extend: {
			screens: {
				'h-xs': {raw: '(min-height: 480px)'},
				'h-sm': {raw: '(min-height: 640px)'},
				'h-md': {raw: '(min-height: 768px)'},
				'h-lg': {raw: '(min-height: 1080px)'},
				'w-vtl': {raw: '(min-width: 1170px)'},
			},
			fontFamily: {
				// primary: "Poppins, sans-serif",
			},
			colors: {
				'light-heading': '#f2f2f2',
				'dark-heading': '#1a1a1a',
				'stroke-light-heading': '#f2f2f2',
				'stroke-dark-heading': '#1a1a1a',
				'light-content': '#A7A7A7',
				'dark-content': '#666666',
				'dark-color': '#1a1a1a',
				'light-color': '#f2f2f2',
				'mask-light': '#eeebeb;',
				'dark-card': '#1a1a1a',
				'dark-text': '#1a1a1a',
				'light-text': '#f2f2f2',
				'fill-light-heading': '#f2f2f2',
				'fill-dark-heading': '#1a1a1a',
				'green-text': '#018C0F',
				'green-bg': '#D7FFE0',
				darkModeUnderline: '#f2f2f2',
				lightModeUnderline: '#1a1a1a',
			},
		},
		variants: {
			extend: {
				textDecoration: ['active'],
				textDecorationColor: ['active'],
			},
		},
	},
	plugins: [],
};
