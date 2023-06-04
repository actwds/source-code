import React from "react";
import { createPF2 } from "./component";
import directory from "../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Pattern Category</td>
				<td>`+directory.PF2.details.category+`</td>
			</tr>
			<tr>
				<td>Pattern ID</td>
				<td><code>`+directory.PF2.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.PF2.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.PF2.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.PF2.usage+`</td>
			</tr>
			<tr>
				<td>Links</td>
				<td>
					<a href="" target="_blank">Figma</a>&nbsp;&nbsp;
					<a href="" target="_blank">GitHub</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.PF2.details.type+` Preview</h2>
`;

export default {
	title: "Patterns/Footers",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.PF2.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createPF2(args);

export const Footers = Template.bind({});
