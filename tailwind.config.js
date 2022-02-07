module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-color-900": "#1B1464",
				"primary-color-800": "#36336C",
				"primary-color-700": "#474574",
				"primary-color-600": "#54527A",
				"primary-color-500": "#5F5E81",
				"primary-color-400": "#696887",
				"primary-color-300": "#72718D",
				"primary-color-200": "#7A7992",
				"primary-color-100": "#818097",

				"secondary-color-900": "#9F005D",
				"secondary-color-800": "#A84C74",
				"secondary-color-700": "#B16A86",
				"secondary-color-600": "#B98095",
				"secondary-color-500": "#C192A3",
				"secondary-color-400": "#C8A1AF",
				"secondary-color-300": "#CFAFBA",
				"secondary-color-200": "#D6BCC4",
				"secondary-color-100": "#DDC7CE",

				"onyx-indigo-color": "#0E0E2C",
				"iris-color": "#4B4DED",
				"peach-tone-color": "#F3D9DA",
			},
			fontFamily: {
				workSans: "'Work Sans', sans-serif",
			},
			fontSize: {
				h1FontSize: "4rem",
				h2FontSize: "2.5rem",
				pretitleFontSize: "0.625rem",
				ourCourseNumberFontSize: "9.5rem",
			},
			dropShadow: {
				navBarDropShadow: "0 1px 1px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [],
};
