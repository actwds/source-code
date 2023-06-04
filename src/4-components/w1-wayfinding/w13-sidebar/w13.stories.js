import React from "react";
import { createW13 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.W13.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.W13.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.W13.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.W13.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.W13.details.type+` Preview</h2>
`;

export default {
	title: "Components/Wayfinding/Sidebar",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.W13.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createW13(args);

export const Sidebar = Template.bind({});
