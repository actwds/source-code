import React from "react";
import { createC12 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C12.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C12.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C12.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C12.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.C12.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.C12.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C12.details.type+` Preview</h2>
`;

export default {
	title: "Components/Cards/Featured Cards",
	decorators: [(Story) => `<div class="act-card-grid">${Story()}</div>`,],
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.C12.status,
		},
	},
	argTypes: {
		header: {
			control: { type: "text", },
			defaultValue: "Card Header",
			description: "Sets the card headline",
			table: {
				defaultValue: {
					summary: "Card Header",
				},
			},
		},
		description: {
			control: { type: "text", },
			defaultValue: "Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam",
			description: "Sets the card description",
			table: {
				defaultValue: {
					summary: "Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam",
				},
			},
		},
	},
};

const Template = (args) => createC12(args);

export const FeaturedCards = Template.bind({});
