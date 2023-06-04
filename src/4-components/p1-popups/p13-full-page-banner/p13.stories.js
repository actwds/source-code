import React from "react";
import { createP13 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.P13.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.P13.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.P13.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.P13.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.P13.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.P13.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.P13.details.type+` Preview</h2>
`;

export default {
	title: "Components/Popups/Full Page Banner",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.P13.status,
		},
	},
	argTypes: {
	},
};

const Template = (args) => createP13(args);

export const FullPageBanner = Template.bind({});
