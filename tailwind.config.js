module.exports = {
	"editor.quickSuggestions": { strings: true },
	mode: "jit",
	purge: ["src/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'

	theme: {
		extend: {
			fontFamily: {
				fantasy: "fantasy",
				Courier: "Courier",
			},
			fontFamily: {
				Arial: "Arial",
			},
		},
    // screens: {
    //   hlg: {
    //     raw: '(min-width: 780px) and (min-height: 300px)'
    //   }
    // },
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
