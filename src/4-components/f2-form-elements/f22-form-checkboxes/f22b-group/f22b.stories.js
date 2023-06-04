import { createF22b } from "./component";

export default {
	title: "Components/Form Elements/Checkboxes/Checkbox Group",
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
			defaultValue: "Checkbox Group Legend",
			description: "Sets the group legend",
			table: {
				defaultValue: {
					summary: "Checkbox Group Legend",
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

const Template = (args) => createF22b(args);

export const CheckboxGroup = Template.bind({});
