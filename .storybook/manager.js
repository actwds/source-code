import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import ACTGovernmentTheme from "./actgovernment-theme";
import "./public/style/manager.css";

// Control the layout of Storybook’s UI
// https://storybook.js.org/docs/react/configure/features-and-behavior
addons.setConfig({
	enableShortcuts: false,
	initialActive: "sidebar",
	isFullscreen: false,
	panelPosition: "bottom",
	selectedPanel: undefined,
	showNav: true,
	showPanel: true,
	showToolbar: true,
	sidebar: {
		collapsedRoots: [
			"other",
		],
		showRoots: true,
	},
	theme: ACTGovernmentTheme,
	toolbar: {
		copy: {
			hidden: false,
		},
		eject: {
			hidden: false,
		},
		fullscreen: {
			hidden: false,
		},
		title: {
			hidden: false,
		},
		zoom: {
			hidden: false,
		},
	},
});
