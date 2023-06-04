import { createPageLayout } from "./component";

export default {
	title: "Layout/Page Layout",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createPageLayout(args);
export const Grid = Template.bind({});
