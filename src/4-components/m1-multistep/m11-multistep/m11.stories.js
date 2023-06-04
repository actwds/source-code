import React from "react";
import { createM11} from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.M11.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.M11.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.M11.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.M11.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.M11.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.M11.details.type+` Preview</h2>
`;

export default {
	title: "Components/Multi Step",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.M11.status,
		},
		viewMode: "story",
	},
	argTypes: {

	},
};

const Template = (args) => createM11(args);

export const MultiStep = Template.bind({});
