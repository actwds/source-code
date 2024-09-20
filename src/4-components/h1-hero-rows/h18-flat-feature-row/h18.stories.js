import React from "react";
import { createH18 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.H18.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.H18.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.H18.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.H18.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.H18.details.type+` Preview</h2>
`;
export default {
	title: "Components/Hero Rows/Flat Feature Row",
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

const Template = (args) => createH18(args);

export const FlatFeatureRow = Template.bind({});
