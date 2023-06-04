import React from "react";
import { createW12 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.W12.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.W12.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.W12.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.W12.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.W12.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.W12.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.W12.details.type+` Preview</h2>
`;

export default {
	title: "Components/Wayfinding/Nav Bar",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.W12.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createW12(args);

export const NavBar = Template.bind({});
NavBar.args = {
	title: "An ACT Government Website",
};
