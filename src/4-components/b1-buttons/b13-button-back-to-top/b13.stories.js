import React from "react";
import { createB13 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.B13.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.B13.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.B13.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.B13.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.B13.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.B13.details.type+` Preview</h2>
`;

export default {
	title: "Components/Buttons/Back To Top Button",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.B13.status,
		},
	},
	argTypes: {
		size: {
			control: { type: "select", },
			options: ["default", "large", "small", "xsmall",],
			defaultValue: "default",
			description: "Sets the button size",
			table: {
				defaultValue: {
					summary: "default",
				},
			},
		},
	},
};

const Template = (args) => createB13(args);

export const BackToTopButton = Template.bind({});
