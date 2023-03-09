import { clsx } from "clsx";
import { useCallback, useState } from "react";
import { ChevronDownIcon } from "./chevron-down-icon";
import { Menu } from "./menu";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	// The useCallback hook is used to memoize the function handleMenuVisibility
	// so that it is only re-created when the value of isMenuOpen changes.
	const handleMenuVisibility = useCallback(() => {
		setIsMenuOpen(!isMenuOpen);
	}, [isMenuOpen]);

	return (
		<div className="flex flex-col mt-4 text-center">
			<div className="z-10 mb-4 bg-white">
				<span className="text-4xl tracking-widest font-big-shoulder">
					RODNEY SANTOS
				</span>

				<br />

				<span className="ml-[0.55em] font-dosis text-base tracking-[0.83em]">
					PHOTOGRAPHY
				</span>
			</div>

			<div
				className={`flex flex-col items-center transition-all will-change-transform ${clsx(
					{
						"-translate-y-14": !isMenuOpen,
					},
				)}`}
			>
				<Menu
					className={`transition-opacity will-change-auto ${clsx({
						"opacity-0": !isMenuOpen,
					})}`}
				/>

				<ChevronDownIcon
					className={`w-5 mt-4 transition-opacity cursor-pointer will-change-auto ${clsx(
						{
							"opacity-20": !isMenuOpen,
						},
					)}`}
					clickHandler={handleMenuVisibility}
				/>
			</div>
		</div>
	);
};
