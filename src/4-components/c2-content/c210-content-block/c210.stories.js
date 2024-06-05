import React from "react";
import { createC210 } from "./component";
import directory from "../../../_docs/directory.json";

export default {
	title: "Components/Content/Content Block",
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
		headingLevel: {
			control: { type: "radio", },
			options: ["h2", "h3",],
			defaultValue: "h2",
			description: "Sets the heading level",
			table: {
				defaultValue: {
					summary: "h2",
				},
			},
		},
		iconVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the visibility of the icon",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		icon: {
			control: { type: "text", },
			defaultValue: "fa-pizza-slice",
			description: "Sets the icon",
			table: {
				defaultValue: {
					summary: "fa-pizza-slice",
				},
			},
		},
		imageVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the visibility of the image",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		description: {
			control: { type: "text", },
			defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum a felis porta vulputate. Etiam condimentum blandit tellus, in molestie purus fermentum et. Nunc vestibulum sapien sit amet ex facilisis, et malesuada sapien malesuada.",
			description: "Sets the text for the description",
			table: {
				defaultValue: {
					summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum a felis porta vulputate. Etiam condimentum blandit tellus, in molestie purus fermentum et. Nunc vestibulum sapien sit amet ex facilisis, et malesuada sapien malesuada.",
				},
			},
		},
		linksVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the visibility of the links list",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		links1: {
			control: { type: "text", },
			defaultValue: "Link #1",
			table: {
				defaultValue: {
					summary: "Link #1",
				},
			},
		},
		links2: {
			control: { type: "text", },
			defaultValue: "Link #2",
			table: {
				defaultValue: {
					summary: "Link #2",
				},
			},
		},
		links3: {
			control: { type: "text", },
			defaultValue: "Link #3",
			table: {
				defaultValue: {
					summary: "Link #3",
				},
			},
		},
		links4: {
			control: { type: "text", },
			defaultValue: "Link #4",
			table: {
				defaultValue: {
					summary: "Link #4",
				},
			},
		},
	},
};

const Template = (args) => createC210(args);

export const ContentBlock = Template.bind({});
