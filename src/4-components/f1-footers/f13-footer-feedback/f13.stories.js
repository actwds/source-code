import React from "react";
import { createF13 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.F13.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.F13.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.F13.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.F13.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.F13.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.F13.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.F13.details.type+` Preview</h2>
`;

export default {
	title: "Components/Footers/Feedback Footer",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.F13.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createF13(args);

export const FeedbackFooter = Template.bind({});
