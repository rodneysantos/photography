import { createSignal } from "solid-js";
import { ChevronDownIcon } from "./chevron-down-icon";
import { MenuKey, Menu } from "./menu";

interface HeaderProps {
	// The function that is called when the active items change.
	onActiveItemsChange: (activeItems: MenuKey[]) => void;
}

export const Header = ({ onActiveItemsChange }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = createSignal(false);

	// The useCallback hook is used to memoize the function handleMenuVisibility
	// so that it is only re-created when the value of isMenuOpen changes.
	const handleMenuVisibility = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<div class="flex flex-col text-center mt-14 5xl:mt-16 5xl:mb-4">
			<div class="z-10 mb-4 bg-white">
				<div class="tracking-widest text-3xl font-big-shoulder">
					RODNEY SANTOS
				</div>

				<div class="text-xl tracking-xs translate-x-1/10 font-dosis">
					PHOTOGRAPHY
				</div>
			</div>

			<div
				data-testid="menuContainer"
				class="flex flex-col items-center transition-all will-change-transform"
				classList={{ "-translate-y-14": !isMenuOpen() }}
			>
				<Menu
					defaultActiveItems={["bnw", "low-key"]}
					onActiveItemsChange={onActiveItemsChange}
					show={isMenuOpen()}
				/>

				<ChevronDownIcon onClick={handleMenuVisibility} show={!isMenuOpen()} />
			</div>
		</div>
	);
};
