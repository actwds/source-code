import React from "react";
import { createC11 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C11.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C11.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C11.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C11.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.C11.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.C11.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C11.details.type+` Preview</h2>
`;

export default {
	title: "Components/Cards/Standard Cards",
	decorators: [(Story) => `<div class="act-card-grid">${Story()}</div>`,],
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.C11.status,
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
			defaultValue: false,
			description: "Sets the card date element",
			table: {
				defaultValue: {
					summary: false,
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

const Template = (args) => createC11(args);

export const StandardCards = Template.bind({});
