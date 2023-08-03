import { createPC32 } from "./component";

export default {
	title: "Patterns/Content/Popular Pages",
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createPC32(args);

export const PopularPages = Template.bind({});
