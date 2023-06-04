import { createPC31 } from "./component";

export default {
	title: "Patterns/Content/Content Article",
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createPC31(args);

export const ContentArticle = Template.bind({});
