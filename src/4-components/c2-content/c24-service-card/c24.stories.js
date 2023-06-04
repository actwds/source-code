import React from "react";
import { createC24 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C24.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C24.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C24.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C24.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.C24.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C24.details.type+` Preview</h2>
`;

export default {
	title: "Components/Content/Service Card",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.C24.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createC24(args);

export const ServiceCard = Template.bind({});
