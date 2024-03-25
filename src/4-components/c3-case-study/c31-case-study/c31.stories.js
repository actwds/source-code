import React from "react";
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
		heading: {
			control: { type: "text", },
			defaultValue: "Heading",
			description: "Sets the text for the heading",
			table: {
				defaultValue: {
					summary: "Heading",
				},
			},
		},
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
			description: "Text for the first tag",
			table: {
				defaultValue: {
					summary: "Case study",
				},
			},
		},
		tag2: {
			control: { type: "text", },
			defaultValue: "Mulleun",
			description: "Text for the second tag",
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
		imageAlignment: {
			control: { type: "radio", },
			options: ["top", "left",],
			defaultValue: "top",
			description: "Sets the alignment of the case study image",
			table: {
				defaultValue: {
					summary: "top",
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
