const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	important: false,
	theme: {
		extend: {
			colors: {
				"primary-color": {
					900: "#1B1464",
					800: "#36336C",
					700: "#474574",
					600: "#54527A",
					500: "#5F5E81",
					400: "#696887",
					300: "#72718D",
					200: "#7A7992",
					100: "#818097",
				},

				"secondary-color": {
					900: "#9F005D",
					800: "#A84C74",
					700: "#B16A86",
					600: "#B98095",
					500: "#C192A3",
					400: "#C8A1AF",
					300: "#CFAFBA",
					200: "#D6BCC4",
					100: "#DDC7CE",
				},

				"onyx-indigo-color": "#0E0E2C",
				"iris-color": "#4B4DED",
				"peach-tone-color": "#F3D9DA",
				"subtle-color": "#8C8CA1",
			},
			fontFamily: {
				workSans: "'Work Sans', sans-serif",
			},
			fontSize: {
				h1FontSize: "4rem",
				h1FontSizeMobile: "2.25rem",
				h2FontSize: "2.5rem",
				h2FontSizeMobile: "2.5rem",
				pretitleFontSize: "0.625rem",
				ourCourseNumberFontSize: "9.5rem",
			},
		},
		screens: {
			xs: "360px",
			...defaultTheme.screens,
		},
	},
	plugins: [
		// This function adds theme colors as CSS vars: use like `var(--color-COLOR)`
		function ({ addBase, theme }) {
			function extractColorVars(colorObj, colorGroup = "") {
				return Object.keys(colorObj).reduce((vars, colorKey) => {
					const value = colorObj[colorKey];

					const newVars =
						typeof value === "string"
							? { [`--color${colorGroup}-${colorKey}`]: value }
							: extractColorVars(value, `-${colorKey}`);

					return { ...vars, ...newVars };
				}, {});
			}

			addBase({
				":root": extractColorVars(theme("colors")),
			});
		},
	],
};
