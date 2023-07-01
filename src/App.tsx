import {
	Component,
	Suspense,
	createResource,
	createSignal,
	onMount,
} from "solid-js";
import { Gallery, Header, Lightbox, MenuKey } from "./components";
import type { Photo } from "./models";
import { fetchPhotosByTags } from "./service";
import {
	getSelectedPhoto,
	hasSelectedPhoto,
	updateSelectedPhoto,
} from "./service/url";

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

	onMount(() => {
		if (hasSelectedPhoto()) {
			setClickedPhoto({ url: getSelectedPhoto()! });
		}
	});

	function handleActiveItemsChange(activeItems: MenuKey[]) {
		setActiveMenuItems(activeItems);
		refetch();
	}

	function handlePhotoClick(photo: Photo) {
		setClickedPhoto(photo);
		updateSelectedPhoto(photo);
	}

	function handleClose() {
		setClickedPhoto(undefined);
		updateSelectedPhoto(null);
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
