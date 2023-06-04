import React from "react";
import { createT21 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.T21.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.T21.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.T21.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.T21.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.T21.details.type+` Preview</h2>
`;

export default {
	title: "Components/Tabs/Tabs",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.T21.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createT21(args);

export const Tabs = Template.bind({});
