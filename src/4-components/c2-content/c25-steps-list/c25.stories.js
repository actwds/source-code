import React from "react";
import { createC25 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C25.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C25.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C25.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C25.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.C25.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C25.details.type+` Preview</h2>
`;

export default {
	title: "Components/Content/Steps List",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.C25.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createC25(args);

export const StepsList = Template.bind({});
