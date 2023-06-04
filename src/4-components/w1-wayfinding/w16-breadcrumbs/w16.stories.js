import React from "react";
import { createW16 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.W16.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.W16.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.W16.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.W16.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.W16.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.W16.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.W16.details.type+` Preview</h2>
`;

export default {
	title: "Components/Wayfinding/Breadcrumbs",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.W16.status,
		},
	},
	argTypes: {
		crumb1: {
			control: { type: "text", },
			defaultValue: "Crumb One",
			description: "Sets the value for Crumb #1",
		},
		crumb1link: {
			control: { type: "text", },
			defaultValue: "#",
			description: "Sets the link for Crumb #1",
		},
		crumb2: {
			control: { type: "text", },
			defaultValue: "Crumb Two",
			description: "Sets the value for Crumb #2",
		},
		crumb2link: {
			control: { type: "text", },
			defaultValue: "#",
			description: "Sets the link for Crumb #2",
		},
		crumb3: {
			control: { type: "text", },
			defaultValue: "Crumb Three",
			description: "Sets the value for Crumb #3",
		},
		crumb3link: {
			control: { type: "text", },
			defaultValue: "#",
			description: "Sets the link for Crumb #3",
		},
		crumb4: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the value for Crumb #4",
		},
		crumb4link: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the link for Crumb #4",
		},
		crumb5: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the value for Crumb #5",
		},
		crumb5link: {
			control: { type: "text", },
			defaultValue: "",
			description: "Sets the link for Crumb #5",
		},
	},
};

const Template = (args) => createW16(args);

export const Breadcrumbs = Template.bind({});
