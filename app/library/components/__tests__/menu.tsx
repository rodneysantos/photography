import renderer from "react-test-renderer";
import { Menu } from "../menu";

describe("menu", () => {
	it("renders correctly", () => {
		// arrange
		const tree = renderer.create(<Menu />).toJSON();

		// assert
		expect(tree).toMatchSnapshot();
	});
});
