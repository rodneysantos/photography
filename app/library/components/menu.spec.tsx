import { beforeEach, describe, expect, it, vi } from "vitest";
import { act, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Menu } from "./menu";

describe("menu", () => {
	const onActiveItemsChange = vi.fn();

	beforeEach(() => {
		onActiveItemsChange.mockReset();
	});

	it("renders correctly", () => {
		// arrange
		const tree = renderer
			.create(
				<Menu
					defaultActiveItems={[]}
					onActiveItemsChange={onActiveItemsChange}
				/>,
			)
			.toJSON();

		// assert
		expect(tree).toMatchSnapshot();
	});

	it("highlights the items on render", () => {
		// arrange
		const { getByTestId } = render(
			<Menu
				defaultActiveItems={["black and white", "low-key"]}
				onActiveItemsChange={onActiveItemsChange}
			/>,
		);

		// act
		const bnwItem = getByTestId("black and white");
		const lowkeyItem = getByTestId("low-key");

		// assert
		expect(bnwItem.className).toContain("bg-neutral-900");
		expect(lowkeyItem.className).toContain("bg-neutral-900");
	});

	it("higlights an item on click", () => {
		// arrange
		const { getByTestId } = render(
			<Menu
				defaultActiveItems={[]}
				onActiveItemsChange={onActiveItemsChange}
			/>,
		);

		// act
		const colorItem = getByTestId("color");
		act(() => {
			colorItem.click();
		});

		// assert
		expect(colorItem.className).toContain("bg-neutral-900");
	});

	it("unhiglights an item on click", () => {
		// arrange
		const { getByTestId } = render(
			<Menu
				defaultActiveItems={["black and white"]}
				onActiveItemsChange={onActiveItemsChange}
			/>,
		);
		const bnwItem = getByTestId("black and white");

		// act
		act(() => {
			bnwItem.click();
		});

		// assert
		expect(bnwItem.className).not.toContain("bg-neutral-900");
	});

	it("emits the active items on click", () => {
		// arrange
		const { getByTestId } = render(
			<Menu
				defaultActiveItems={[]}
				onActiveItemsChange={onActiveItemsChange}
			/>,
		);
		const colorItem = getByTestId("color");
		const lowkeyItem = getByTestId("low-key");

		// act
		act(() => {
			colorItem.click();
			lowkeyItem.click();
		});

		// assert
		expect(onActiveItemsChange).toHaveBeenCalledTimes(2);
		expect(onActiveItemsChange).toHaveBeenCalledWith(["color"]);
		expect(onActiveItemsChange).toHaveBeenCalledWith(["low-key"]);
	});
});
