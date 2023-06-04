import React from "react";
import { createW15 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.W15.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.W15.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.W15.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.W15.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.W15.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.W15.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.W15.details.type+` Preview</h2>
`;

export default {
	title: "Components/Wayfinding/Mega Menu",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.W15.status,
		},
		viewMode: "story",
	},
	argTypes: {

	},
};

const Template = (args) => createW15(args);

export const MegaMenu = Template.bind({});
