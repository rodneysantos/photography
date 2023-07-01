import { Photo } from "../models";

interface SnapProps {
	// The URL of the image.
	photo: Photo;

	// The alt text of the image.
	alt: string;

	// The function that is called when the image is clicked.
	onClick: (photo: Photo) => void;
}

export const Snap = (props: SnapProps) => {
	function handleClick() {
		props.onClick(props.photo);
	}

	return (
		<img
			class="object-cover object-center w-full h-full aspect-square"
			loading="lazy"
			src={props.photo.url}
			alt={props.alt}
			onClick={handleClick}
		/>
	);
};
