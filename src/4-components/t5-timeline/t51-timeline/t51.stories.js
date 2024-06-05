import React from "react";
import { createT51 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.T51.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.T51.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.T51.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.T51.description+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.T51.details.type+` Preview</h2>
`;

export default {
	title: "Components/Timeline/Timeline",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.T51.status,
		},
	},
	argTypes: {
		state: {
			control: { type: "radio", },
			options: ["default", "complete", "current", "inactive",],
			defaultValue: "default",
			description: "Sets the state of the icons",
			table: {
				defaultValue: {
					summary: "default",
				},
			},
		},
		item1Heading: {
			control: { type: "text", },
			defaultValue: "Item 1 Heading",
			description: "Sets the heading for item 1",
			table: {
				defaultValue: {
					summary: "Item 1 Heading",
				},
			},
		},
		item1Description: {
			control: { type: "text", },
			defaultValue: "Item 1 Description",
			description: "Sets the description for item 1",
			table: {
				defaultValue: {
					summary: "Item 1 Description",
				},
			},
		},
		item2Heading: {
			control: { type: "text", },
			defaultValue: "Item 2 Heading",
			description: "Sets the heading for item 2",
			table: {
				defaultValue: {
					summary: "Item 2 Heading",
				},
			},
		},
		item2Description: {
			control: { type: "text", },
			defaultValue: "Item 2 Description",
			description: "Sets the description for item 2",
			table: {
				defaultValue: {
					summary: "Item 2 Description",
				},
			},
		},
		item3Heading: {
			control: { type: "text", },
			defaultValue: "Item 3 Heading",
			description: "Sets the heading for item 3",
			table: {
				defaultValue: {
					summary: "Item 3 Heading",
				},
			},
		},
		item3Description: {
			control: { type: "text", },
			defaultValue: "Item 3 Description",
			description: "Sets the description for item 3",
			table: {
				defaultValue: {
					summary: "Item 3 Description",
				},
			},
		},
		item4Heading: {
			control: { type: "text", },
			defaultValue: "Item 4 Heading",
			description: "Sets the heading for item 4",
			table: {
				defaultValue: {
					summary: "Item 4 Heading",
				},
			},
		},
		item4Description: {
			control: { type: "text", },
			defaultValue: "Item 4 Description",
			description: "Sets the description for item 4",
			table: {
				defaultValue: {
					summary: "Item 4 Description",
				},
			},
		},
	},
};

const Template = (args) => createT51(args);

export const Timeline = Template.bind({});
