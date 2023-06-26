import { For } from "solid-js";
import { Photo } from "../models";

interface GalleryProps {
	photos: Photo[];
}

export const Gallery = (props: GalleryProps) => {
	return (
		<div class="flex justify-center">
			<div
				data-testid="gallery-list"
				class="container grid grid-cols-2 gap-12 3xl:auto-rows-3xl 4xl:auto-rows-4xl 5xl:auto-rows-5xl"
			>
				<For each={props.photos}>
					{(photo) => {
						return (
							<img
								class="object-cover object-center w-full h-full aspect-square"
								src={photo.url}
								alt=""
							/>
						);
					}}
				</For>
			</div>
		</div>
	);
};
