import { createL22 } from "./component";

export default {
	title: "Components/Logos/Cobranded (Logo)",
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
		layout: "fullscreen",
	},
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {

	},
};

const Template = (args) => createL22(args);

export const AccessCanberra = Template.bind({});
AccessCanberra.args = {
	colour: "black",
	cobrand: "access-canberra",
	type1: "horizontal",
	type2: "cobrand-logo",
	alt1: "ACT Government",
	alt2: "Access Canberra",
};
