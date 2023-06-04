import React from "react";
import { createW14 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.W14.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.W14.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.W14.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.W14.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.W14.details.type+` Preview</h2>
`;

export default {
	title: "Components/Wayfinding/Pagination",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.W14.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createW14(args);

export const Pagination = Template.bind({});
