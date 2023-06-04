import React from "react";
import { createF26b } from "./component";
import directory from "../../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.F26.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.F26.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.F26.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.F26.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.F26.hierarchy+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.F26.details.type+` Preview</h2>
`;

export default {
	title: "Components/Form Elements/Progress/Progress Group",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.F26.status,
		},
	},
	argTypes: {
		
	},
};

const Template = (args) => createF26b(args);

export const ProgressGroup = Template.bind({});
