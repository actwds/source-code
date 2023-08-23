import React from "react";
import { createW18 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.W18.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.W18.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.W18.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.W18.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.W18.details.type+` Preview</h2>
`;

export default {
	title: "Components/Wayfinding/Popular Links",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.W18.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createW18(args);

export const PopularLinks = Template.bind({});
