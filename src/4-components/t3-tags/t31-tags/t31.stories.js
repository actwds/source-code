import { createT31 } from "./component";

export default {
	title: "Components/Tags/Tags",
	decorators: [(Story) => `<div class="act-tag__container">${Story()}</div>`,],
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {
		tag1: {
			control: { type: "text", },
			defaultValue: "Gurubun",
			description: "Sets the tag text",
			table: {
				defaultValue: {
					summary: "Gurubun",
					detail: "koala",
				},
			},
		},
		style: {
			control: { type: "radio", },
			options: ["stroke", "filled",],
			defaultValue: "stroke",
			description: "Sets the tag style",
			table: {
				defaultValue: {
					summary: "stroke",
				},
			},
		},
	},
};

const Template = (args) => createT31(args);

export const Tags = Template.bind({});
