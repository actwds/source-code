import React from "react";
import { createS14 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.S14.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.S14.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.S14.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.S14.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.S14.details.type+` Preview</h2>
`;

export default {
	title: "Components/Search Elements/Search Filter",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.S14.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createS14(args);

export const SearchFilter = Template.bind({});
