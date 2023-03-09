interface MenuProps {
	// The class name to apply to the div element.
	className?: string;
}

export const Menu = ({ className }: MenuProps) => {
	return (
		<div className={className}>
			<div className="flex flex-row justify-center">
				<div className="px-2 py-1 mx-2 text-center border-2 cursor-pointer border-neutral-900">
					black and white
				</div>

				<div className="px-2 py-1 mx-2 text-center border-2 cursor-pointer border-neutral-900">
					color
				</div>

				<div className="px-2 py-1 mx-2 text-center border-2 cursor-pointer bg-neutral-900 text-neutral-100 border-neutral-900">
					low-key
				</div>
			</div>
		</div>
	);
};
