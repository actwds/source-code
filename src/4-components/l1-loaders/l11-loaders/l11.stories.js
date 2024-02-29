import { createL11 } from "./component";

export default {
	title: "Components/Loaders/Loader",
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		icon: {
			control: { type: "text", },
			defaultValue: "fa-solid fa-spinner",
			description: "Sets the icon",
		},
	},
};

const Template = (args) => createL11(args);

export const Loader = Template.bind({});
