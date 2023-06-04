import React from "react";
import { createA22 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.A22.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.A22.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.A22.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.A22.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.A22.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.A22.details.type+` Preview</h2>
`;

export default {
	title: "Components/Alerts/In Page Alert",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.A22.status,
		},
	},
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["success", "warning", "error",],
			defaultValue: "success",
			description: "Sets the alert type",
			table: {
				defaultValue: {
					summary: "success",
				},
			},
		},
		icon: {
			control: { type: "radio", },
			options: ["no-icon", "icon-left",],
			defaultValue: "icon-left",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "icon-left",
				},
			},
		},
		fontawesome: {
			control: { type: "text", },
			defaultValue: "fa-circle-info",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "fa-circle-info",
				},
			},
		},
		alert: {
			control: { type: "text", },
			defaultValue: "Learner licence information",
			description: "Sets the alert text",
		},
		description: {
			control: { type: "text", },
			defaultValue: "To assist customers having difficulty attending an Access Canberra Service centre at this time car and motorcycle learner licences that expired between 31 January and 31 March 2022 have now been extended by six months.",
			description: "Sets the alert description",
		},
	},
};

const Template = (args) => createA22(args);

export const InPageAlert = Template.bind({});
