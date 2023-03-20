import { act, fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Header } from "./header";

describe("header", () => {
	const onActiveItemsChange = vi.fn();

	beforeEach(() => {
		onActiveItemsChange.mockReset();
	});

	it("renders correctly", () => {
		// arrange
		const tree = renderer
			.create(<Header onActiveItemsChange={onActiveItemsChange} />)
			.toJSON();

		// assert
		expect(tree).toMatchSnapshot();
	});

	it("animates the menu container on click", () => {
		// arrange
		const { getByTestId } = render(
			<Header onActiveItemsChange={onActiveItemsChange} />,
		);

		// act
		const container = getByTestId("menuContainer");
		const dropdown = getByTestId("chevronDownIcon");
		act(() => {
			fireEvent.click(dropdown);

			// assert
			expect(container.className).toContain("-translate-y-14");
			expect(dropdown.className).toContain("opacity-20");
		});
	});

	it("emits the active items on change", () => {
		// arrange
		const { getByTestId } = render(
			<Header onActiveItemsChange={onActiveItemsChange} />,
		);

		// act
		const blackAndWhiteItem = getByTestId("black and white");
		act(() => {
			blackAndWhiteItem.click();
		});

		// assert
		expect(onActiveItemsChange).toHaveBeenCalledTimes(1);
	});
});
