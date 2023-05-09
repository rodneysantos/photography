import { createSignal } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

interface MenuItem {
	// The id of the item.
	id: number;

	// The name of the item.
	name: Item;
}

const menuItems: MenuItem[] = [
	{ id: 0, name: "black and white" },
	{ id: 1, name: "color" },
	{ id: 2, name: "low-key" },
];

export type Item = "black and white" | "color" | "low-key";

export interface MenuProps extends JSX.HTMLAttributes<HTMLDivElement> {
	// The ids of the active items.
	defaultActiveItems: Item[];

	// The callback to call when the active items change.
	onActiveItemsChange: (activeItems: Item[]) => void;

	// Whether or not to show the menu.
	show: boolean;
}

export const Menu = (props: MenuProps) => {
	const [activeItems, setActiveItems] = createSignal(props.defaultActiveItems);

	// Toggle the active state of an item.
	// If the item is active, remove it from the active items.
	// If the item is not active, add it to the active items.
	function handleToggleItem(name: Item) {
		const updatedActiveItems = activeItems().includes(name)
			? activeItems().filter((item) => item !== name)
			: [...activeItems(), name];

		setActiveItems(updatedActiveItems);
		props.onActiveItemsChange(updatedActiveItems);
	}

	return (
		<div
			data-testid="menu"
			class="transition-opacity will-change-auto"
			classList={{ "opacity-0": !props.show }}
		>
			<div class="flex flex-row justify-center">
				{menuItems.map((item) => {
					const isActive = activeItems().includes(item.name);

					return (
						<div
							data-testid={item.name}
							onClick={() => handleToggleItem(item.name)}
							class="px-2 py-1 mx-2 text-center border-2 cursor-pointer border-neutral-900"
							classList={{ "bg-neutral-900 text-neutral-100": isActive }}
						>
							{item.name}
						</div>
					);
				})}
			</div>
		</div>
	);
};
