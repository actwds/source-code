import React from "react";
import { createF20 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.F20.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.F20.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.F20.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.F20.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.F20.details.type+` Preview</h2>
`;

export default {
	title: "Components/Form Elements/Form Structure",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.F20.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createF20(args);

export const FormStructure = Template.bind({});
