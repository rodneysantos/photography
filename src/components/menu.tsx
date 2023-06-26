import { createSignal } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

interface Menu {
	// The id of the item.
	id: number;

	// The key of the item.
	key: MenuKey;

	// The name of the item.
	name: "Black and White" | "Color" | "Low-Key";
}

export type MenuKey = "bnw" | "color" | "low-key";

const menuItems: Menu[] = [
	{ id: 0, key: "bnw", name: "Black and White" },
	{ id: 1, key: "color", name: "Color" },
	{ id: 2, key: "low-key", name: "Low-Key" },
];

export interface MenuProps extends JSX.HTMLAttributes<HTMLDivElement> {
	// The ids of the active items.
	defaultActiveItems: MenuKey[];

	// The callback to call when the active items change.
	onActiveItemsChange: (activeItems: MenuKey[]) => void;

	// Whether or not to show the menu.
	show: boolean;
}

export const Menu = (props: MenuProps) => {
	const [activeItems, setActiveItems] = createSignal(props.defaultActiveItems);

	// Toggle the active state of an item.
	// If the item is active, remove it from the active items.
	// If the item is not active, add it to the active items.
	function handleToggleItem(key: MenuKey) {
		const updatedActiveItems = activeItems().includes(key)
			? activeItems().filter((item) => item !== key)
			: [...activeItems(), key];

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
					const isActive = activeItems().includes(item.key);

					return (
						<div
							data-testid={item.key}
							onClick={() => handleToggleItem(item.key)}
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
