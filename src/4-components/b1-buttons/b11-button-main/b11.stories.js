import React from "react";
import { createB11 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.B11.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.B11.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.B11.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.B11.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.B11.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.B11.details.type+` Preview</h2>
`;

export default {
	title: "Components/Buttons/Standard Buttons",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.B11.status,
		},
	},
	argTypes: {
		type: {
			control: { type: "radio", },
			options: ["primary", "secondary", "tertiary", "inline",],
			defaultValue: "primary",
			description: "Sets the button type",
			table: {
				defaultValue: {
					summary: "primary",
				},
			},
		},
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
		icon: {
			control: { type: "radio", },
			options: ["no-icon", "icon-left", "icon-right",],
			defaultValue: "icon-left",
			description: "Sets the button icon position",
			table: {
				defaultValue: {
					summary: "icon-left",
				},
			},
		},
		pseudoClass: {
			control: { type: "radio", },
			options: ["", "hover", "active", "focus", "disabled",],
			defaultValue: "undefined",
			description: "Sets the pseudo-class of the button.<br>Make sure this is empty before copying code from this page.",
			table: {
				defaultValue: {
					summary: "undefined",
				},
			},
		},
		fontawesome: {
			control: { type: "text", },
			defaultValue: "fa-face-laugh",
			description: "Sets the button icon",
			table: {
				defaultValue: {
					summary: "fa-face-laugh",
				},
			},
		},
		label: {
			control: { type: "text", },
			defaultValue: "Birrigai",
			description: "Sets the button text",
			table: {
				defaultValue: {
					summary: "birrigai",
					detail: "To laugh",
				},
			},
		},
	},
};

const Template = (args) => createB11(args);

export const StandardButtons = Template.bind({});
