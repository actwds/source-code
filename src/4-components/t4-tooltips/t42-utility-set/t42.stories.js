import { createT42 } from "./component";
import directory from "../../../_docs/directory.json";

const componentDescription = `
<div class="act-table-container">
	<table class="act-table-docs">
		<tbody>
			<tr>
				<td>Component Category</td>
				<td>`+directory.T42.details.category+`</td>
			</tr>
			<tr>
				<td>Component ID</td>
				<td><code>`+directory.T42.details.id+`</code></td>
			</tr>
			<tr>
				<td>Element</td>
				<td>`+directory.T42.element+`</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>`+directory.T42.description+`</td>
			</tr>
			<tr>
				<td>Hierarchy</td>
				<td>`+directory.T42.hierarchy+`</td>
			</tr>
			<tr>
				<td>Usage</td>
				<td>`+directory.T42.usage+`</td>
			</tr>
		</tbody>
	</table>
</div>
<h2>`+directory.T42.details.type+` Preview</h2>
`;

export default {
	title: "Components/Tooltips/Utility Set",
	parameters: {
		docs: {
			description: {
				component: componentDescription,
			},
		},
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createT42(args);

export const UtilitySet = Template.bind({});
