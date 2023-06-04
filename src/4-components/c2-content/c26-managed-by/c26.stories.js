import { createC26 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C26.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C26.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C26.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C26.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.C26.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C26.details.type+` Preview</h2>
`;

export default {
	title: "Components/Content/Managed By",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
			status: {
				type: directory.C26.status,
			},
		},
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createC26(args);

export const ManagedBy = Template.bind({});
