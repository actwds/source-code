import { createC31 } from "./component";
import directory from "../../../_docs/directory.json";

export default {
	title: "Components/Case Study/Case Study",
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {
		tagVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the visibility of the case study tag",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		tag1: {
			control: { type: "text", },
			defaultValue: "Case study",
			description: "Flowers",
			table: {
				defaultValue: {
					summary: "Case study",
				},
			},
		},
		tag2: {
			control: { type: "text", },
			defaultValue: "Mulleun",
			description: "Eagle",
			table: {
				defaultValue: {
					summary: "Mulleun",
				},
			},
		},
		imageVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the visibility of the case study image",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		buttonVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the visibility of the case study button",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},

	},
};

const Template = (args) => createC31(args);

export const CaseStudy = Template.bind({});
