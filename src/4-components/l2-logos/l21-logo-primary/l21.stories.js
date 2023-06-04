import { createL21 } from "./component";

export default {
	title: "Components/Logos/ACT Government",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createL21(args);

export const Horizontal = Template.bind({});
Horizontal.args = {
	colour: "black",
	type: "horizontal",
	alt: "ACT Government",
};
export const Reversed = Template.bind({});
Reversed.args = {
	colour: "white",
	type: "horizontal",
	alt: "ACT Government",
};
Reversed.parameters = {
	backgrounds: {
		default: "black",
		values: [
			{ name: "black", value: "#111111", },
		],
	},
};
