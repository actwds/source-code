import { createPS42 } from "./component";

export default {
	title: "Patterns/Search/Filtered Search",
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createPS42(args);

export const FilteredSearch = Template.bind({});
