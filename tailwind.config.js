/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			smM: { max: "640px" },
			sm: "640px",
		},
		extend: {
			colors: {
				'ming': '#243c5a',
			}
		},
	},
	plugins: [],
};
