import { useState } from "react";

export interface MenuProps {
	// The class name to apply to the div element.
	className?: string;

	// The ids of the active items.
	defaultActiveItems: number[];
}

const activeMenuClasses = "bg-neutral-900 text-neutral-100";
const menuItems = [
	{ id: 0, name: "black and white" },
	{ id: 1, name: "color" },
	{ id: 2, name: "low-key" },
];

export const Menu = ({ defaultActiveItems, className }: MenuProps) => {
	const [activeItems, setActiveItems] = useState<number[]>(defaultActiveItems);

	// Toggle the active state of an item.
	// If the item is active, remove it from the active items.
	// If the item is not active, add it to the active items.
	const toggleItem = (id: number) => {
		const isActive = activeItems.includes(id);

		if (isActive) {
			setActiveItems(activeItems.filter((item) => item !== id));
		} else {
			setActiveItems([...activeItems, id]);
		}
	};

	return (
		<div className={className}>
			<div className="flex flex-row justify-center">
				{menuItems.map((item) => {
					const isActive = activeItems.includes(item.id);
					const className = isActive ? activeMenuClasses : "";

					return (
						<div
							key={item.id}
							data-testid={item.name}
							className={`px-2 py-1 mx-2 text-center border-2 cursor-pointer border-neutral-900 ${className}`}
							onClick={() => toggleItem(item.id)}
							onKeyDown={() => {}}
						>
							{item.name}
						</div>
					);
				})}
			</div>
		</div>
	);
};
