import React from "react";
import { createS12 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.S12.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.S12.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.S12.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.S12.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.S12.details.type+` Preview</h2>
`;

export default {
	title: "Components/Search Elements/Search Bar",
	decorators: [(Story) => `<div class="act-search-results-container">${Story()}</div>`,],
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.S12.status,
		},
	},
	argTypes: {

	},
};

const Template = (args) => createS12(args);

export const SearchBar = Template.bind({});
