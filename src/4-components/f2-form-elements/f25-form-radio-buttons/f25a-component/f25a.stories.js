import { createF25a } from "./component";

export default {
	title: "Components/Form Elements/Radio Buttons/Radio Button",
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {
		label: {
			control: { type: "text", },
			defaultValue: "Field Label",
			description: "Sets the input label",
			table: {
				defaultValue: {
					summary: "Field Label",
				},
			},
		},
		name: {
			control: { type: "text", },
			defaultValue: "Name",
			description: "Sets the radio name",
			table: {
				defaultValue: {
					summary: "Name",
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
		pseudoClass: {
			control: { type: "select", },
			options: ["default","focus","disabled",],
			defaultValue: "default",
			description: "Sets the input pseudoclass",
			table: {
				defaultValue: {
					summary: "default",
				},
			},
		},
	},
};

const Template = (args) => createF25a(args);

export const RadioButton = Template.bind({});
