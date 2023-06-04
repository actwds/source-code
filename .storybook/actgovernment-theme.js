import { create } from "@storybook/theming";

export default create({ // https://storybook.js.org/docs/react/configure/theming

	base: "light",
	colorPrimary: "#472d8c",
	colorSecondary: "#000000",

	// UI
	appBg: "#F6F6F6",
	appContentBg: "#FFFFFF",
	appBorderColor: "#000000",
	appBorderRadius: 4,

	// Typography
	fontBase: "Source Sans Pro, -apple-system, BlinkMacSystemFont, sans-serif",
	fontCode: "monospace",

	// Text colors
	textColor: "black",
	textInverseColor: "rgba(255,255,255,0.9)",

	// Toolbar default and active colours
	barTextColor: "#000000",
	barSelectedColor: "#000000",
	barBg: "white",

	// Form colours
	inputBg: "white",
	inputBorder: "silver",
	inputTextColor: "black",
	inputBorderRadius: 4,

	brandTitle: "ACT Government Website Design System (ACTWDS)",
	brandUrl: "/?path=/docs/about-about--page",
	brandImage: "/logos/act-gov-inline.svg",
	brandTarget: "_self",

});
