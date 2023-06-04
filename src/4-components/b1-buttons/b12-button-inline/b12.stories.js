import React from "react";
import { createB12 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.B12.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.B12.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.B12.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.B12.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.B12.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.B12.details.type+` Preview</h2>
`;

export default {
	title: "Components/Buttons/Inline Links",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.B12.status,
		},
	},
	argTypes: {
		text: {
			control: { type: "text", },
			defaultValue: "yerradhang",
			description: "Sets the link text",
			table: {
				defaultValue: {
					summary: "yerradhang",
					detail: "eucalyptus tree",
				},
			},
		},
		link: {
			control: { type: "text", },
			defaultValue: "#",
			description: "Sets the link destination",
			table: {
				defaultValue: {
					summary: "#",
				},
			},
		},
		external: {
			control: { type: "radio", },
			options: ["internal link", "external link",],
			defaultValue: "external link",
			description: "Sets the link extension",
			table: {
				defaultValue: {
					summary: "external link",
				},
			},
		},
	},
};

const Template = (args) => createB12(args);

export const InlineLinks = Template.bind({});
