import { createC29 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C29.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C29.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C29.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C29.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.C29.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C29.details.type+` Preview</h2>
`;

export default {
	title: "Components/Content/Links List",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
			status: {
				type: directory.C29.status,
			},
		},
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createC29(args);

export const LinksList = Template.bind({});
