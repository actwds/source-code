import React from "react";
import { createH11 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.H11.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.H11.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.H11.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.H11.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.H11.details.type+` Preview</h2>
`;
export default {
	title: "Components/Hero Rows/Home Card Row",
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

const Template = (args) => createH11(args);

export const HomeCardRow = Template.bind({});
