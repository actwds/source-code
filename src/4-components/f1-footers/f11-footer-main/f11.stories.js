import React from "react";
import { createF11 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.F11.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.F11.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.F11.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.F11.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.F11.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.F11.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.F11.details.type+` Preview</h2>
`;

export default {
	title: "Components/Footers/Main Footer",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.F11.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createF11(args);

export const MainFooter = Template.bind({});
