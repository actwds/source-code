import React from "react";
import { createF22a } from "./component";
import directory from "../../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.F22.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.F22.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.F22.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.F22.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.F22.hierarchy+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.F22.details.type+` Preview</h2>
`;
export default {
	title: "Components/Form Elements/Checkboxes/Checkbox",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.F22.status,
		},
	},
	argTypes: {
		type: {
			control: { type: "select", },
			options: ["input","password","date","email","tel","text","url",],
			defaultValue: "input",
			description: "Sets the input type",
			table: {
				defaultValue: {
					summary: "input",
				},
			},
		},
		width: {
			control: { type: "select", },
			options: ["25%","33%","50%","66%","75%","100%",],
			defaultValue: "66%",
			description: "Sets the input width",
			table: {
				defaultValue: {
					summary: "66%",
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

const Template = (args) => createF22a(args);

export const Checkbox = Template.bind({});
