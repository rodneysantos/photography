/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"big-shoulder": ["big-shoulder", "Helvetica, Arial, sans-serif"],
				dosis: ["dosis", "Helvetica, Arial, sans-serif"],
			},
		},
	},
	plugins: [],
};
