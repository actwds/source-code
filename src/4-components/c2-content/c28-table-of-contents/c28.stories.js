import { createC28 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C28.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C28.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C28.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C28.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.C28.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C28.details.type+` Preview</h2>
`;

export default {
	title: "Components/Content/Table Of Contents",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
			status: {
				type: directory.C28.status,
			},
		},
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createC28(args);

export const TableOfContents = Template.bind({});
