import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Menu, MenuProps } from "../app/library/components/menu";

const Template: ComponentStory<typeof Menu> = ({ defaultActiveItems }) => {
	return (
		<Menu
			defaultActiveItems={defaultActiveItems}
			onActiveItemsChange={() => {}}
		/>
	);
};

export default {
	title: "Menu",
	component: Menu,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof Menu>;

export const Basic = Template.bind({});
Basic.args = {
	defaultActiveItems: [0],
} as MenuProps;
