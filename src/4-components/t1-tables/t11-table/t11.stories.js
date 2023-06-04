import React from "react";
import { createT11 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.T11.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.T11.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.T11.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.T11.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.T11.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.T11.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.T11.details.type+` Preview</h2>
`;

export default {
	title: "Components/Tables/Table",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.T11.status,
		},
	},
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["primary", "secondary",],
			defaultValue: "primary",
			description: "Sets the table type",
			table: {
				defaultValue: {
					summary: "primary",
				},
			},
		},
	},
};

const Template = (args) => createT11(args);

export const Table = Template.bind({});
