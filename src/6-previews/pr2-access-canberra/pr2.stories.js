import { createPR2 } from "./component";

export default {
	title: "Previews/Access Canberra",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
		viewMode: "story",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createPR2(args);

export const AccessCanberraHome = Template.bind({});
