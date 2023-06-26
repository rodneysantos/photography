import { Component, Suspense, createResource, createSignal } from "solid-js";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { MenuKey } from "./components/menu";
import type { Photo } from "./models";
import { fetchPhotosByTags } from "./service";

const App: Component = () => {
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

	return (
		<div class="flex flex-col">
			<Header onActiveItemsChange={handleActiveItemsChange} />

			<Suspense fallback={<p>Loading...</p>}>
				<Gallery photos={photos()} />
			</Suspense>
		</div>
	);
};

export default App;
