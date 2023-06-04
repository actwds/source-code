import React from "react";
import { createW11 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.W11.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.W11.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.W11.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.W11.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.W11.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.W11.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.W11.details.type+` Preview</h2>
`;

export default {
	title: "Components/Wayfinding/Masthead",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.W11.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createW11(args);

export const Masthead = Template.bind({});
Masthead.args = {
	title: "An ACT Government Website",
	buttonText: "Login",
};
