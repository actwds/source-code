module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:storybook/recommended",
	],
	"overrides": [],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
	},
	"plugins": [
		"react",
	],
	"rules": {
		"array-bracket-spacing": "error",
		"comma-dangle": [
			"error", {
				"arrays": "always",
				"objects": "always",
				"imports": "never",
				"exports": "never",
				"functions": "never",
			},
		],
		"indent": [
			"error", "tab",
		],
		"linebreak-style": [
			"error", "unix",
		],
		"no-console": [
			"error", {
				"allow": [
					"warn",
					"error",
				],
			},
		],
		"no-else-return": "error",
		"no-unused-vars": "off",
		"quotes": [
			"error", "double", { "allowTemplateLiterals": true }
		],
		"semi": [
			"error", "always",
		],
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"overrides": [
		{
			"files": ["component.js",],
			"rules": {
				"indent": [
					"error", 2,
				],
			},
		},
	],
};
