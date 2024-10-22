import ineedj from "@ineedj/eslintrc";

export default ineedj({
	formatters: {
		json: false,
		stylistic: false,
		stylisticJSX: false,
		stylisticTS: false,
		perfectionistSorters: false
	},
	syntax: {
		eslint: true,
		jsx: false,
		next: false,
		node: true,
		react: false,
		storybook: false,
		tailwindcss: false,
		typescript: true,
		toml: false,
		yaml: false
	}
}).removeRules("@typescript-eslint/no-throw-literal");
