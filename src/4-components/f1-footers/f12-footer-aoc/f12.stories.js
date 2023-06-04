import React from "react";
import { createF12 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.F12.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.F12.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.F12.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.F12.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.F12.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.F12.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.F12.details.type+` Preview</h2>
`;

export default {
	title: "Components/Footers/Acknowledgement Footer",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.F12.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createF12(args);

export const AcknowledgementFooter = Template.bind({});
