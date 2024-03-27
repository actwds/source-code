import React from "react";
import { createPC210 } from "./component";
import directory from "../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Pattern Category</td>
				<td>`+directory.PC210.details.category+`</td>
			</tr>
			<tr>
				<td>Pattern ID</td>
				<td><code>`+directory.PC210.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.PC210.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.PC210.description+`</td>
			</tr>
			<tr>
				<td>Links</td>
				<td>
					<a href="https://www.figma.com/file/WmE2YKY85C0VlwebrxICfP/ACT-Design-System?type=design&node-id=2316%3A5811&mode=design&t=A4oKIDDwaK7M5nC0-1" target="_blank">Figma</a>&nbsp;&nbsp;
					<a href="" target="_blank">GitHub</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.PC210.details.type+` Preview</h2>
`;

export default {
	title: "Patterns/Content Block Grid",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
		status: {
			type: directory.PC210.status,
		},
	},
	argTypes: {
		heading: {
			control: { type: "text", },
			defaultValue: "Heading",
			description: "Sets the text for the heading",
			table: {
				defaultValue: {
					summary: "Heading",
				},
			},
		},
		iconVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the visibility of the icon",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		icon: {
			control: { type: "text", },
			defaultValue: "fa-pizza-slice",
			description: "Sets the icon",
			table: {
				defaultValue: {
					summary: "fa-pizza-slice",
				},
			},
		},
		imageVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the visibility of the image",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		description: {
			control: { type: "text", },
			defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum a felis porta vulputate. Etiam condimentum blandit tellus, in molestie purus fermentum et. Nunc vestibulum sapien sit amet ex facilisis, et malesuada sapien malesuada.",
			description: "Sets the text for the description",
			table: {
				defaultValue: {
					summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum a felis porta vulputate. Etiam condimentum blandit tellus, in molestie purus fermentum et. Nunc vestibulum sapien sit amet ex facilisis, et malesuada sapien malesuada.",
				},
			},
		},
		linksVisible: {
			control: { type: "boolean", },
			defaultValue: true,
			description: "Sets the visibility of the links list",
			table: {
				defaultValue: {
					summary: true,
				},
			},
		},
		links1: {
			control: { type: "text", },
			defaultValue: "Link #1",
			table: {
				defaultValue: {
					summary: "Link #1",
				},
			},
		},
		links2: {
			control: { type: "text", },
			defaultValue: "Link #2",
			table: {
				defaultValue: {
					summary: "Link #2",
				},
			},
		},
		links3: {
			control: { type: "text", },
			defaultValue: "Link #3",
			table: {
				defaultValue: {
					summary: "Link #3",
				},
			},
		},
		links4: {
			control: { type: "text", },
			defaultValue: "Link #4",
			table: {
				defaultValue: {
					summary: "Link #4",
				},
			},
		},
	},
};

const Template = (args) => createPC210(args);

export const DefaultContentBlockGrid = Template.bind({});
