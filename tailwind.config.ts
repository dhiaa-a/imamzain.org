import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			backgroundImage: {},
			colors: {
				primary: {
					"100": "#f3fbfa",
					"150": "#d6efed",
					"200": "#b8e3e0",
					"250": "#9ad8d3",
					"300": "#7cccc6",
					"350": "#5fc1b8",
					"400": "#45b1a8",
					"450": "#39938c",
					"500": "#2d746e",
					"550": "#296a65",
					"600": "#255f5a",
					"650": "#215450",
					"700": "#1c4945",
					"750": "#183e3b",
					"800": "#143330",
					"850": "#0f2826",
					"900": "#0b1d1b",
					DEFAULT: "#2d746e",
				},
				secondary: {
					"100": "#f3f7fc",
					"150": "#ceddf1",
					"200": "#a9c3e7",
					"250": "#85a9dc",
					"300": "#608fd2",
					"350": "#3b76c8",
					"400": "#2f60a5",
					"450": "#244b80",
					"500": "#1a365d",
					"550": "#183256",
					"600": "#162e50",
					"650": "#152b4a",
					"700": "#132744",
					"750": "#11243e",
					"800": "#102138",
					"850": "#0e1d32",
					"900": "#0c1a2c",
					DEFAULT: "#1a365d",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(50px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"pop-in": {
					"0%": { opacity: "0", transform: "scale(125%)" },
					"100%": { opacity: "1", transform: "scale(100%)" },
				},
				float: {
					"0%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0px)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in-up": "fade-in-up forwards",
				"fade-in": "fade-in forwards ease-out",
				"pop-in": "pop-in forwards ease-in-out",
				float: "float 1s forwards infinite ease-in-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
