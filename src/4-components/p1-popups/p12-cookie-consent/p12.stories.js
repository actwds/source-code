import React from "react";
import { createP12 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.P12.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.P12.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.P12.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.P12.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.P12.details.type+` Preview</h2>
`;

export default {
	title: "Components/Popups/CookieConsent",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.P12.status,
		},
		viewMode: "story",
	},
	argTypes: {

	},
};

const Template = (args) => createP12(args);

export const CookieConsent = Template.bind({});
