import { JSX } from "solid-js/jsx-runtime";

interface ChevronDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
	// The function to call when the SVG element is clicked.
	onClick: () => void;

	// Whether or not to show the icon.
	show: boolean;
}

export const ChevronDownIcon = (props: ChevronDownIconProps) => {
	return (
		<svg
			data-testid="chevronDownIcon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			onClick={props.onClick}
			class="w-5 mt-4 transition-opacity cursor-pointer will-change-auto"
			classList={{ "opacity-20": !props.show }}
		>
			<path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
		</svg>
	);
};
