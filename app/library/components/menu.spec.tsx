import { describe, expect, it } from "vitest";
import { act, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Menu } from "./menu";

describe("menu", () => {
	it("renders correctly", () => {
		// arrange
		const tree = renderer.create(<Menu defaultActiveItems={[]} />).toJSON();

		// assert
		expect(tree).toMatchSnapshot();
	});

	it("highlights the items on render", () => {
		// arrange
		const { getByTestId } = render(<Menu defaultActiveItems={[0, 2]} />);

		// act
		const bnwItem = getByTestId("black and white");
		const lowkeyItem = getByTestId("low-key");

		// assert
		expect(bnwItem.className).toContain("bg-neutral-900");
		expect(lowkeyItem.className).toContain("bg-neutral-900");
	});

	it("higlights an item on click", () => {
		// arrange
		const { getByTestId } = render(<Menu defaultActiveItems={[]} />);

		// act
		const colorItem = getByTestId("color");
		act(() => {
			colorItem.click();
		});

		// assert
		expect(colorItem.className).toContain("bg-neutral-900");
	});
});
