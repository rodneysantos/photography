import type { Component } from "solid-js";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Item } from "./components/menu";

const App: Component = () => {
	function handleActiveItemsChange(activeItems: Item[]) {
		// console.log(activeItems);
	}

	return (
		<div class="flex flex-col">
			<Header onActiveItemsChange={handleActiveItemsChange} />
			<Gallery />
		</div>
	);
};

export default App;
