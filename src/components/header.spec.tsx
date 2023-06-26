import { cleanup, fireEvent, render } from "@solidjs/testing-library";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Header } from "./header";

describe("header", () => {
	const onActiveItemsChange = vi.fn();

	beforeEach(() => {
		onActiveItemsChange.mockReset();
	});

	afterEach(cleanup);

	it("renders correctly", () => {
		// arrange
		const { asFragment } = render(() => (
			<Header onActiveItemsChange={onActiveItemsChange} />
		));

		// assert
		expect(asFragment()).toMatchSnapshot();
	});

	it("animates the menu container on click", () => {
		// arrange
		const { getByTestId } = render(() => (
			<Header onActiveItemsChange={onActiveItemsChange} />
		));

		// act
		fireEvent.click(getByTestId("chevronDownIcon"));

		// assert
		expect(getByTestId("menuContainer").className).not.toContain(
			"-translate-y-14",
		);
		expect(getByTestId("chevronDownIcon").getAttribute("class")).toContain(
			"opacity-20",
		);
	});

	it("emits the active items on change", () => {
		// arrange
		const { getByTestId } = render(() => (
			<Header onActiveItemsChange={onActiveItemsChange} />
		));

		// act
		const blackAndWhiteItem = getByTestId("bnw");
		blackAndWhiteItem.click();

		// assert
		expect(onActiveItemsChange).toHaveBeenCalledTimes(1);
	});
});
