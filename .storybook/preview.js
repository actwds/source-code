import React from 'react';
import "./public/style/preview.scss"; 		// Custom styles for Storybook UI

// Adds custom viewport sizes to Docs and Canvas
const customViewports = {
	iphone13ProMax: {
		name: "iPhone 13 Pro Max",
		styles: {
			height: "926px",
			width: "428px",
		},
	},
	iphone13: {
		name: "iPhone 13",
		styles: {
			height: "844px",
			width: "390px",
		},
	},
	iphone13Mini: {
		name: "iPhone 13 mini",
		styles: {
			height: "812px",
			width: "375px",
		},
	},
	ipadPro129: {
		name: "iPad Pro 12.9\"",
		styles: {
			height: "1024px",
			width: "1366px",
		},
	},
	ipadPro11Landscape: {
		name: "iPad Pro 11\"",
		styles: {
			height: "834px",
			width: "1194px",
		},
	},
	macbookPro16: {
		name: "MacBook Pro 16\"",
		styles: {
			height: "1117px",
			width: "1728px",
		},
	},
	macbookPro14: {
		name: "MacBook Pro 14\"",
		styles: {
			height: "982px",
			width: "1512px",
		},
	},
	macbookAir13: {
		name: "MacBook Air 13\"",
		styles: {
			height: "832px",
			width: "1280px",
		},
	},

};

export const decorators = [(Story) => `<div class="act-body">${Story().outerHTML || Story()}</div>`];

export const parameters = {
  actions: {
		argTypesRegex: "^on[A-Z].*",
	},
	docs: {
			components: {
					p: "",
					div: "",
					span: "",
					input: "",
					h1: "",
					h2: "",
					h3: "",
					h4: "",
					h5: "",
					h6: "",
					ul: "",
					ol: "",
					li: "",
					a: "",
					i: "",
					code: "",
					table: "",
					thead: "",
					tbody: "",
					tr: "",
					th: "",
					td: "",
			},
	},
	html: {
		prettier: {
			tabWidth: 2,
			useTabs: true,
			printWidth: 1000,
		},
	},
	options: {
		storySort: { // Set the order of stories/pages in the sidebar
			method: "alphabetical",
			order: [
				"About",
					[
						"About",
						"What is the Design System",
						"Requesting a new component",
						"Technical Info",
					],

				"Design",
					[
						"Getting started",
						"Figma UI Kit",
						"Extending the Design System",
						"Design Tokens",
							[
								"Design Tokens",
								"Breakpoints"
							]
					],
				"Layout",
					[
						"Overview",
					],
				"Components",
					[
						"Overview",
						"Accordion",
							[
								"Overview",
								"Accordion",
							],
						"Alerts",
							[
								"Overview",
								"Global Alert",
									[
										"Docs",
										"Global Alert",
									],
							],
						"Buttons",
							[
								"Overview",
								"Standard Buttons",
								"Inline Links",
							],
						"Cards",
							[
								"Overview",
								"Card Grid",
								"Standard Cards",
								"Featured",
							],
						"Content",
							[
								"Overview",
							],
						"Footers",
							[
								"Overview",
								"Main Footer",
								"Acknowledgement Footer",
								"Feedback Footer",
							],
						"Form Elements",
							[
								"Overview",
								"Form Structure",
								"Input Fields",
								"Checkboxes",
									[
										"Checkbox Group",
										"Checkbox",
									],
								"Dropdowns",
								"Toggles",
								"Radio Buttons",
									[
										"Radio Group",
										"Radio Button",
									],
								"Form Progress"
							],
						"Hero Rows",
							[
								"Overview",
								"Home Card Row",
								"Home Link Row",
								"Home Widget Row",
								"Home Search Row",
								"Page Title Row",
							],
						"Loaders",
						"Logos",
						"Popups",
						"Search Elements",
							[
								"Overview",
							],
						"Tables",
						"Tabs",
						"Tags",
						"Tooltips",
						"Wayfinding",
							[
								"Overview",
								"Masthead",
								"Nav Bar",
								"Sidebar",
								"Pagination",
								"Mega Menu",
								"Breadcrumbs",
							],
					],
				"Patterns",
					[
						"Overview",
					],
				"Previews",
					[
						"Overview",
					],
				"Guidelines",
				[
					"Overview",
				],
			],
		},
	},
	previewTabs: {
		canvas: {
			title: "Toolkit", // Rename 'Canvas' tab for readability
		},
		"storybook/docs/panel": {
			index: -2, // Moves 'Docs' in front of 'Canvas/Toolkit', viewMode adjusts the actual load order
			title: "Docs",
		},
	},
	// Creates custom component statuses, useful for marking component lifecycle within Storybook UI
	// https://storybook.js.org/addons/@etchteam/storybook-addon-status/
	status: {
		statuses: {
			core: {
				background: "#472D8C",
				color: "#FFFFFF",
				description: "This is a core design system component",
			},
			expressive: {
				background: "#008FC5",
				color: "#FFFFFF",
				description: "This is an expressive design system component",
			},
			production: {
				background: "#098660",
				color: "#FFFFFF",
				description: "This is a production component and can be used on sites",
			},
			staging: {
				background: "#F15F50",
				color: "#FFFFFF",
				description: "This is a staging component and is not ready to be used",
			},
			obsolete: {
				background: "#BA2133",
				color: "#FFFFFF",
				description: "This is an obsolete component and should be removed from sites",
			},
			health: {
				background: "#0076c8",
				color: "#FFFFFF",
				description: "This component can only be used by ACT Health",
			},
		},
	},
	toolbar: {
		dynamicTitle: true,
		icon: "circlehollow",
		showName: true,
	},
	viewMode: "docs", // Sets 'Docs' as the default tab on page load, previewTabs adjusts the UI to match
	viewport: {
		viewports: customViewports, // Replaces the default viewports with the custom ones defined above
	},
}
