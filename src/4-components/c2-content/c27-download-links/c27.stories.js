import { createC27 } from "./component";
import directory from "../../../_docs/directory.json";

// Component Settings
const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.C27.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.C27.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.C27.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.C27.description+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.C27.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.C27.details.type+` Preview</h2>
`;

export default {
	title: "Components/Content/Download Links",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
			status: {
				type: directory.C27.status,
			},
		},
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createC27(args);

export const DownloadLinks = Template.bind({});
