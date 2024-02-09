import { createQ11 } from "./component";

export default {
	title: "Components/Quick Exit/Quick Exit",
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createQ11(args);

export const QuickExit = Template.bind({});
