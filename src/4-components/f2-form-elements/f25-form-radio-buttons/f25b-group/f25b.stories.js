import { createF25b } from "./component";

export default {
	title: "Components/Form Elements/Radio Buttons/Radio Group",
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {
		legend: {
			control: { type: "text", },
			defaultValue: "Radio Group Legend",
			description: "Sets the group legend",
			table: {
				defaultValue: {
					summary: "Radio Group Legend",
				},
			},
		},
		required: {
			control: { type: "boolean", },
			defaultValue: false,
			description: "Sets the input label",
			table: {
				defaultValue: {
					summary: false,
				},
			},
		},
	},
};

const Template = (args) => createF25b(args);

export const RadioGroup = Template.bind({});
