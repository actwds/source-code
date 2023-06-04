import React from "react";
import { createH12 } from "./component";
import directory from "../../../_docs/directory.json";

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
	title: "Components/Hero Rows/Home Link Row",
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

	},
};

const Template = (args) => createH12(args);

export const HomeLinkRow = Template.bind({});
