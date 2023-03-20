import { useState } from "react";

interface MenuItem {
	// The id of the item.
	id: number;

	// The name of the item.
	name: Item;
}

const activeMenuClasses = "bg-neutral-900 text-neutral-100";
const menuItems: MenuItem[] = [
	{ id: 0, name: "black and white" },
	{ id: 1, name: "color" },
	{ id: 2, name: "low-key" },
];

export type Item = "black and white" | "color" | "low-key";

export interface MenuProps {
	// The class name to apply to the div element.
	className?: string;

	// The ids of the active items.
	defaultActiveItems: Item[];

	// The callback to call when the active items change.
	onActiveItemsChange: (activeItems: Item[]) => void;
}

export const Menu = ({
	defaultActiveItems,
	onActiveItemsChange,
	className,
}: MenuProps) => {
	const [activeItems, setActiveItems] = useState(defaultActiveItems);

	// Toggle the active state of an item.
	// If the item is active, remove it from the active items.
	// If the item is not active, add it to the active items.
	const handleToggleItem = (name: Item) => {
		const updatedActiveItems = activeItems.includes(name)
			? activeItems.filter((item) => item !== name)
			: [...activeItems, name];

		setActiveItems(updatedActiveItems);
		onActiveItemsChange(updatedActiveItems);
	};

	return (
		<div data-testid="menu" className={className}>
			<div className="flex flex-row justify-center">
				{menuItems.map((item) => {
					const isActive = activeItems.includes(item.name);
					const className = isActive ? activeMenuClasses : "";

					return (
						<div
							key={item.id}
							data-testid={item.name}
							className={`px-2 py-1 mx-2 text-center border-2 cursor-pointer border-neutral-900 ${className}`}
							onClick={() => handleToggleItem(item.name)}
						>
							{item.name}
						</div>
					);
				})}
			</div>
		</div>
	);
};
