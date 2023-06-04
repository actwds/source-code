import React from "react";
import { createA11 } from "./component";
import directory from "../../../_docs/directory.json";
import { within, userEvent } from "@storybook/testing-library";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.A11.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.A11.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.A11.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.A11.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.A11.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.A11.details.type+` Preview</h2>
`;
export default {
	title: "Components/Accordion",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.A11.status,
		},
	},
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["primary", "secondary",],
			defaultValue: "primary",
			description: "Sets the accordion type",
			table: {
				defaultValue: {
					summary: "primary",
				},
			},
		},
		state: {
			control: { type: "radio", },
			options: ["closed", "open",],
			defaultValue: "closed",
			description: "Sets the accordion state",
			table: {
				defaultValue: {
					summary: "closed",
				},
			},
		},
	},
};

const Template = (args) => createA11(args);

export const Accordion = Template.bind({});
