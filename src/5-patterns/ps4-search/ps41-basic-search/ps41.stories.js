import { createPS41 } from "./component";

export default {
	title: "Patterns/Search/Basic Search",
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {

	},
};

const Template = (args) => createPS41(args);

export const BasicSearch = Template.bind({});
