/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
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
				'dark-card': '#1a1a1a',
				'dark-text': '#1a1a1a',
				'light-text': '#f2f2f2',
				'fill-light-heading': '#f2f2f2',
				'fill-dark-heading': '#1a1a1a',
			},
		},
	},
	plugins: [],
};
