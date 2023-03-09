import { ComponentMeta } from "@storybook/react";
import { MenuSB } from "./menu";

export default {
	title: "Menu",
	component: MenuSB,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof MenuSB>;

export const Primary = () => <MenuSB />;
