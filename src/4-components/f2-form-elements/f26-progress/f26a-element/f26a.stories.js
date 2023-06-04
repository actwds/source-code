import React from "react";
import { createF26a } from "./component";
import directory from "../../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.F26.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.F26.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.F26.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.F26.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.F26.hierarchy+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.F26.details.type+` Preview</h2>
`;

export default {
	title: "Components/Form Elements/Progress/Progress Element",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.F26.status,
		},
	},
	argTypes: {
		label: {
			control: {
				type: "text",
			},
			defaultValue: "Step #1",
		},
		substep: {
			control: {
				type: "boolean",
			},
			defaultValue: false,
			description: "Is a substep",
		},
		stage: {
			control: {
				type: "select",
				options: ["complete", "active", "incomplete",],
			},
			defaultValue: "complete",
			description: "Stage of progress",
		},
		large: {
			control: {
				type: "boolean",
			},
			defaultValue: false,
			description: "Is large",
		},
	},
};

const Template = (args) => createF26a(args);

export const ProgressElement = Template.bind({});
