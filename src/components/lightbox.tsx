import { Show } from "solid-js";
import { Photo } from "../models";

export interface LightboxProps {
	// The id of the photo to display.
	photo: Photo | undefined;

	// The function that is called when the lightbox is closed.
	onClose: () => void;
}

export const Lightbox = (props: LightboxProps) => {
	return (
		<Show when={props.photo !== undefined}>
			<div
				data-testid="lightbox"
				class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-60"
			>
				<div class="relative bg-white">
					<div class="absolute top-0 right-0 z-50 p-4">
						<button
							data-testid="lightbox-close"
							class="p-2 transition-colors rounded-full"
							onClick={props.onClose}
						>
							<svg
								class="w-6 h-6 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					<img
						data-testid="lightbox-photo"
						class="h-full p-2 bg-white min-md:h-screen"
						src={props.photo!.url}
						alt=""
					/>
				</div>
			</div>
		</Show>
	);
};
