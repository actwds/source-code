import React from "react";
import { createC23 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C23.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C23.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C23.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C23.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.C23.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C23.details.type+` Preview</h2>
`;

export default {
	title: "Components/Content/Quote",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.C23.status,
		},
	},
	argTypes: {
		content: {
			control: { type: "text", },
			defaultValue: "Et harum quidem rerum facilis est et expedita distinctio.",
			description: "Sets the breaker content",
			table: {
				defaultValue: {
					summary: "Et harum quidem rerum facilis est et expedita distinctio.",
				},
			},
		},
	},
};

const Template = (args) => createC23(args);

export const Quote = Template.bind({});
