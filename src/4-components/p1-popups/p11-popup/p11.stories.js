import React from "react";
import { createP11 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.P11.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.P11.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.P11.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.P11.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.P11.details.type+` Preview</h2>
`;

export default {
	title: "Components/Popups/Popup",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.P11.status,
		},
		viewMode: "story",
	},
	argTypes: {

	},
};

const Template = (args) => createP11(args);

export const Popup = Template.bind({});
