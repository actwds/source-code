import React from "react";
import { createH14 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.H14.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.H14.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.H14.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.H14.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.H14.details.type+` Preview</h2>
`;
export default {
	title: "Components/Hero Rows/Home Search Row",
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

const Template = (args) => createH14(args);

export const HomeSearchRow = Template.bind({});
