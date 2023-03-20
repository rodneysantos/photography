interface ChevronDownIconProps {
	// The function to call when the SVG element is clicked.
	onClick: () => void;

	// The class name to apply to the SVG element.
	className?: string;
}

export const ChevronDownIcon = ({
	className,
	onClick,
}: ChevronDownIconProps) => {
	return (
		<svg
			data-testid="chevronDownIcon"
			className={className}
			onClick={onClick}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
		</svg>
	);
};
