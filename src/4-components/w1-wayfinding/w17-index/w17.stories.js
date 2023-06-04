import React from "react";
import { createW17 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.W17.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.W17.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.W17.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.W17.description+`</td>
			</tr>
			<tr>
				<td>Restrictions</td>
				<td><b>`+directory.W17.restrictions+`</b></td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.W17.details.type+` Preview</h2>
`;

export default {
	title: "Components/Wayfinding/Index",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.W17.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createW17(args);

export const Index = Template.bind({});
