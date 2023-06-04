import { createPT1 } from "./component";

export default {
	title: "Patterns/Wayfinding/Top Bar",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createPT1(args);

export const TopBar = Template.bind({});
