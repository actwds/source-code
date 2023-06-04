import React from "react";
import { createC21 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C21.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C21.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C21.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C21.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C21.details.type+` Preview</h2>
`;

export default {
	title: "Components/Content/Breaker",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.C21.status,
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

const Template = (args) => createC21(args);

export const Breaker = Template.bind({});
