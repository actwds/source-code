import React from "react";
import { createPC11 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Pattern Category</td>
				<td>`+directory.PC1.details.category+`</td>
			</tr>
			<tr>
				<td>Pattern ID</td>
				<td><code>`+directory.PC1.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.PC1.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.PC1.description+`</td>
			</tr>
			<tr>
				<td>Links</td>
				<td>
					<a href="" target="_blank">Figma</a>&nbsp;&nbsp;
					<a href="" target="_blank">GitHub</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.PC1.details.type+` Preview</h2>
`;

export default {
	title: "Patterns/Card Grids/Default Card Grid",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.PC1.status,
		},
	},
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["primary", "secondary", "tertiary", "homepage",],
			defaultValue: "primary",
			description: "Sets the card type",
			table: {
				defaultValue: {
					summary: "primary",
				},
			},
		},
		feature: {
			control: { type: "radio", },
			options: ["image", "icon", "none",],
			defaultValue: "image",
			description: "Sets the card feature element",
			table: {
				defaultValue: {
					summary: "image",
				},
			},
		},
		icon: {
			control: { type: "text", },
			defaultValue: "fa-pizza-slice",
			description: "Sets the card icon",
			table: {
				defaultValue: {
					summary: "fa-pizza-slice",
				},
			},
		},
		dateVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the card date element",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		tagVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the card tag element",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		tag1: {
			control: { type: "text", },
			defaultValue: "Gamburra",
			description: "Flowers",
			table: {
				defaultValue: {
					summary: "Gamburra",
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
		header: {
			control: { type: "text", },
			defaultValue: "Card Header",
			description: "Sets the card headline",
			table: {
				defaultValue: {
					summary: "Card Header",
				},
			},
		},
		description: {
			control: { type: "text", },
			defaultValue: "Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam",
			description: "Sets the card description",
			table: {
				defaultValue: {
					summary: "Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam",
				},
			},
		},
		ctaVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the card CTA element",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		ctaText: {
			control: { type: "text", },
			defaultValue: "Learn more",
			description: "Sets the card CTA text",
			table: {
				defaultValue: {
					summary: "Learn more",
				},
			},
		},
	},
};

const Template = (args) => createPC11(args);

export const DefaultCardGrid = Template.bind({});
