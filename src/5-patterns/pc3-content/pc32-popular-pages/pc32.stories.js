import { createPC31 } from "./component";

export default {
	title: "Patterns/Content/Popular Pages",
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createPC31(args);

export const PopularPages = Template.bind({});
