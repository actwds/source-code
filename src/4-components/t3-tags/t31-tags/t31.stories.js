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
					detail: "Koala",
				},
			},
		},
		tag2: {
			control: { type: "text", },
			defaultValue: "Koala",
			description: "Sets the tag text",
			table: {
				defaultValue: {
					summary: "Koala",
					detail: "Gurubun",
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
		colour: {
			control: { type: "radio", },
			options: ["black", "white", "purple",],
			defaultValue: "black",
			description: "Sets the tag colour",
			table: {
				defaultValue: {
					summary: "black",
				},
			},
		},
		type: {
			control: { type: "radio", },
			options: ["text", "link", "checkbox",],
			defaultValue: "text",
			description: "Sets the tag type",
			table: {
				defaultValue: {
					summary: "text",
				},
			},
		},
	},
};

const Template = (args) => createT31(args);

export const Tags = Template.bind({});
