import { Header } from "~/library/components/header";
import { Item } from "~/library/components/menu";

export default function Index() {
	const handleActiveItemsChange = (activeItems: Item[]) => {
		console.log(activeItems);
	};

	return (
		<>
			<Header onActiveItemsChange={handleActiveItemsChange} />
		</>
	);
}
