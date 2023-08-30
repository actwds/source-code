import React from "react";
import { createH13 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.H13.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.H13.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.H13.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.H13.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.H13.details.type+` Preview</h2>
`;
export default {
	title: "Components/Hero Rows/Home Widget Row",
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

const Template = (args) => createH13(args);

export const HomeWidgetRow = Template.bind({});
