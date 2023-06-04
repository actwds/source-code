import React from "react";
import { createS13 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.S13.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.S13.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.S13.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.S13.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.S13.hierarchy+`</td>
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
<h2>`+directory.S13.details.type+` Preview</h2>
`;

export default {
	title: "Components/Search Elements/Search Stats",
	decorators: [(Story) => `<div class="act-search-results-container">${Story()}</div>`,],
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.S13.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createS13(args);

export const SearchStats = Template.bind({});
