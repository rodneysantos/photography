import { Component, Suspense, createResource, createSignal } from "solid-js";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Lightbox } from "./components/lightbox";
import { MenuKey } from "./components/menu";
import type { Photo } from "./models";
import { fetchPhotosByTags } from "./service";

const App: Component = () => {
	const [clickedPhoto, setClickedPhoto] = createSignal<Photo>();
	const [activeMenuItems, setActiveMenuItems] = createSignal<MenuKey[]>([
		"bnw",
		"low-key",
	]);
	const [photos, { refetch }] = createResource<Photo[], MenuKey[]>(
		activeMenuItems,
		fetchPhotosByTags,
		{ initialValue: [] },
	);

	function handleActiveItemsChange(activeItems: MenuKey[]) {
		setActiveMenuItems(activeItems);
		refetch();
	}

	function handlePhotoClick(photo: Photo) {
		setClickedPhoto(photo);
	}

	function handleClose() {
		setClickedPhoto(undefined);
	}

	return (
		<div data-testid="app" class="flex flex-col">
			<Header onActiveItemsChange={handleActiveItemsChange} />

			<Suspense fallback={<p>Loading...</p>}>
				<Gallery photos={photos()} onPhotoClick={handlePhotoClick} />
			</Suspense>

			<Lightbox photo={clickedPhoto()} onClose={handleClose} />
		</div>
	);
};

export default App;
