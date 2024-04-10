/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [],
	theme: {
		screens: {
			iphone5: "320px",
			// => @media (min-width: 320px) { for iphone 5 }

			samsg: "360px",
			// => @media (min-width: 320px) { for Samsung phone }

			xxxs: "360px",
			// => @media (min-width: 380px) { ... }

			xxs: "380px",
			// => @media (min-width: 380px) { ... }

			xs: "512px",
			// => @media (min-width: 512px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }
			mdx: "800px",
			// => @media (min-width: 800px) { ... }
			mdxx: "850px",
			// => @media (min-width: 850px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }

			"3xl": "1600px",
			// => @media (min-width: 1600px) { ... }

			"4xl": "1920px",
			// => @media (min-width: 1920px) { ... }
		},
		extend: {
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
				opaq: "0 4px 16px 6px rgba(0,0,0,0.4)",
				full: "0 3px 1px -2px rgba(0,0,0, 0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12) ",
			},
			colors: {
				dust: {
					50: "#f6f6f6",
					100: "#e7e7e7",
					200: "#d1d1d1",
					300: "#b0b0b0",
					400: "#888888",
					500: "#666666", // main
					600: "#5d5d5d",
					700: "#4f4f4f",
					800: "#454545",
					900: "#3d3d3d",
					950: "#262626",
				},
				blue: {
					50: "#edf8ff",
					100: "#d7edff",
					200: "#b9e0ff",
					300: "#88cfff",
					400: "#50b3ff",
					500: "#2890ff",
					600: "#1573ff",
					700: "#0a59eb",
					800: "#0f48be",
					900: "#134195",
					950: "#11285a",
				},

				pink: {
					50: "#fef1f9",
					100: "#fde6f5",
					200: "#fecced",
					300: "#feaee1", //#FEAEE1
					400: "#fc6ac4",
					500: "#f63eaa",
					600: "#e61c89",
					700: "#c80e6d",
					800: "#a50f59",
					900: "#89124d",
					950: "#54032b",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
