import React from "react";
import { createC211 } from "./component";
import directory from "../../../_docs/directory.json";

export default {
	title: "Components/Content/Framed Media",
	parameters: {
		docs: {
			description: {
				component: "",
			},
		},
		layout: "fullscreen",
	},
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["YouTube", "Image", "Vimeo",],
			defaultValue: "YouTube",
			description: "Sets the media type",
			table: {
				defaultValue: {
					summary: "YouTube",
				},
			},
		},
		youtube: {
			control: { type: "text", },
			defaultValue: "https://www.youtube.com/embed/K9aEw0G5fzs?si=uL0_3K6bM50VutIr",
			table: {
				defaultValue: {
					summary: "https://www.youtube.com/embed/K9aEw0G5fzs?si=uL0_3K6bM50VutIr",
				},
			},
		},
		image: {
			control: { type: "text", },
			defaultValue: "/images/purple.jpg",
			table: {
				defaultValue: {
					summary: "/images/purple.jpg",
				},
			},
		},
		vimeo: {
			control: { type: "text", },
			defaultValue: "https://player.vimeo.com/video/64699699?h=966c67b1bd",
			table: {
				defaultValue: {
					summary: "https://player.vimeo.com/video/64699699?h=966c67b1bd",
				},
			},
		},
		caption: {
			control: { type: "text", },
			defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			description: "Sets the text for the description",
			table: {
				defaultValue: {
					summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
			},
		},
		altText: {
			control: { type: "text", },
			defaultValue: "Lorem ipsum",
			description: "Sets the alt text",
			table: {
				defaultValue: {
					summary: "Lorem ipsum",
				},
			},
		},
	},
};

const Template = (args) => createC211(args);

export const FramedMedia = Template.bind({});
