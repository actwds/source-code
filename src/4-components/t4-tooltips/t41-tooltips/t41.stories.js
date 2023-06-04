import { createT41 } from "./component";

export default {
	title: "Components/Tooltips/Tooltips",
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

const Template = (args) => createT41(args);

export const Tooltips = Template.bind({});
