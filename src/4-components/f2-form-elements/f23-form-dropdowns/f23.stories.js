import React from "react";
import { createF23 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.F23.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.F23.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.F23.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.F23.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.F23.hierarchy+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.F23.details.type+` Preview</h2>
`;

export default {
	title: "Components/Form Elements/Dropdowns",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.F23.status,
		},
	},
	argTypes: {
		width: {
			control: { type: "select", },
			options: ["25%","33%","50%","66%","75%","100%",],
			defaultValue: "33%",
			description: "Sets the input width",
			table: {
				defaultValue: {
					summary: "33%",
				},
			},
		},
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
			options: ["default","focus","disabled","read-only",],
			defaultValue: "default",
			description: "Sets the input pseudoclass",
			table: {
				defaultValue: {
					summary: "default",
				},
			},
		},
		value: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the input value",
			table: {
				defaultValue: {
					summary: "",
				},
			},
		},
		placeholder: {
			control: { type: "text", },
			defaultValue: "Placeholder Text",
			description: "Sets the input placeholder",
			table: {
				defaultValue: {
					summary: "Placeholder Text",
				},
			},
		},
		description: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the description visibility",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		descriptionValue: {
			control: { type: "text", },
			defaultValue: "Field Description",
			description: "Sets the description value",
			table: {
				defaultValue: {
					summary: "Field Description",
				},
			},
		},
		alert: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the alert visibility",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		alertIcon: {
			control: { type: "text", },
			defaultValue: "fa-face-laugh",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "fa-face-laugh",
				},
			},
		},
		alertValue: {
			control: { type: "text", },
			defaultValue: "Alert Description",
			description: "Sets the alert value",
			table: {
				defaultValue: {
					summary: "Alert Description",
				},
			},
		},
	},
};

const Template = (args) => createF23(args);

export const Dropdowns = Template.bind({});
