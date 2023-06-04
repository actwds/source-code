import { createL23 } from "./component";

export default {
	title: "Components/Logos/Cobranded (Text)",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createL23(args);

export const AccessCanberra = Template.bind({});
AccessCanberra.args = {
	colour: "black",
	cobrand: "access-canberra",
	type1: "horizontal",
	type2: "cobrand-text",
	alt1: "ACT Government",
	alt2: "Access Canberra",
};
export const ACTHealth = Template.bind({});
ACTHealth.args = {
	colour: "black",
	cobrand: "act-health",
	type1: "horizontal",
	type2: "cobrand-text",
	alt1: "ACT Government",
	alt2: "Health",
};
