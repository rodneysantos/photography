import { createSignal } from "solid-js";
import { ChevronDownIcon } from "./chevron-down-icon";
import { Item, Menu } from "./menu";

interface HeaderProps {
	// The function that is called when the active items change.
	onActiveItemsChange: (activeItems: Item[]) => void;
}

export const Header = ({ onActiveItemsChange }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = createSignal(false);

	// The useCallback hook is used to memoize the function handleMenuVisibility
	// so that it is only re-created when the value of isMenuOpen changes.
	const handleMenuVisibility = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<div class="flex flex-col text-center 4xl:mt-14 5xl:mt-16 5xl:mb-4">
			<div class="z-10 mb-4 bg-white">
				<div class="tracking-widest 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-big-shoulder">
					RODNEY SANTOS
				</div>

				<div class="text-base font-dosis 5xl:text-2xl 4xl:text-xl 4xl:ml-[0.37rem] 4xl:tracking-[0.69rem] 5xl:ml-5xl 5xl:tracking-5xl">
					PHOTOGRAPHY
				</div>
			</div>

			<div
				data-testid="menuContainer"
				class="flex flex-col items-center transition-all will-change-transform"
				classList={{ "-translate-y-14": !isMenuOpen() }}
			>
				<Menu
					defaultActiveItems={["black and white", "low-key"]}
					onActiveItemsChange={onActiveItemsChange}
					show={isMenuOpen()}
				/>

				<ChevronDownIcon onClick={handleMenuVisibility} show={!isMenuOpen()} />
			</div>
		</div>
	);
};
