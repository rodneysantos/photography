import { For } from "solid-js";
import { Photo } from "../models";
import { Snap } from "./snap";

interface GalleryProps {
	// The photos to display.
	photos: Photo[];

	// The function that is called when a photo is clicked.
	onPhotoClick: (photo: Photo) => void;
}

export const Gallery = (props: GalleryProps) => {
	return (
		<div class="flex justify-center p-4">
			<div
				data-testid="gallery-list"
				class="container grid grid-cols-1 gap-12 sm:grid-cols-2 3xl:auto-rows-3xl 4xl:auto-rows-4xl 5xl:auto-rows-5xl"
			>
				<For each={props.photos}>
					{(photo) => {
						return <Snap photo={photo} alt="" onClick={props.onPhotoClick} />;
					}}
				</For>
			</div>
		</div>
	);
};
