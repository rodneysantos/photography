/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					"3xl": "20rem",
					"4xl": "24rem",
					"5xl": "32rem",
				},
			},
			fontFamily: {
				"big-shoulder": ["big-shoulder", "Helvetica, Arial, sans-serif"],
				dosis: ["dosis", "Helvetica, Arial, sans-serif"],
			},
			gridAutoRows: {
				"3xl": "38rem",
				"4xl": "46rem",
				"5xl": "64rem",
			},
			letterSpacing: {
				"4xl": "1rem",
				"5xl": "1.01rem",
			},
			margin: {
				"4xl": "0.5rem",
				"5xl": "0.55rem",
			},
			screens: {
				"3xl": "1600px",
				"4xl": "1920px",
				"5xl": "2560px",
			},
		},
	},
	plugins: [],
};
