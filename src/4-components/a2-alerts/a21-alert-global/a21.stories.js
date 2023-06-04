import React from "react";
import { createA21 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.A21.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.A21.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.A21.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.A21.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.A21.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.A22.details.type+` Preview</h2>
`;

export default {
	title: "Components/Alerts/Global Alert",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.A21.status,
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
		dismissible: {
			control: "boolean",
			defaultValue: true,
			description: "Sets the alerts persistance",
			table: {
				defaultValue: {
					summary: true,
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
			defaultValue: "fa-leaf",
			description: "Sets the alert icon",
			table: {
				defaultValue: {
					summary: "fa-leaf",
				},
			},
		},
		alert: {
			control: { type: "text", },
			defaultValue: "Free registration for zero emission vehicles for two years",
			description: "Sets the alert text",
		},
	},
};

const Template = (args) => createA21(args);

export const GlobalAlert = Template.bind({});
