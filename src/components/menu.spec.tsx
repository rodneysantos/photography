import { cleanup, render } from "@solidjs/testing-library";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Menu } from "./menu";

describe("menu", () => {
	const onActiveItemsChange = vi.fn();

	beforeEach(() => {
		onActiveItemsChange.mockReset();
	});

	afterEach(cleanup);

	test("renders correctly", () => {
		// arrange
		const { asFragment } = render(() => (
			<Menu
				show={true}
				defaultActiveItems={[]}
				onActiveItemsChange={onActiveItemsChange}
			/>
		));

		// assert
		expect(asFragment()).toMatchSnapshot();
	});

	test("highlights the items on render", () => {
		// arrange
		const { getByTestId } = render(() => (
			<Menu
				show={true}
				defaultActiveItems={["black and white", "low-key"]}
				onActiveItemsChange={onActiveItemsChange}
			/>
		));

		// assert
		expect(getByTestId("black and white").className).toContain(
			"bg-neutral-900",
		);
		expect(getByTestId("low-key").className).toContain("bg-neutral-900");
	});

	test("higlights an item on click", () => {
		// arrange
		const { getByTestId } = render(() => (
			<Menu
				show={true}
				defaultActiveItems={[]}
				onActiveItemsChange={onActiveItemsChange}
			/>
		));

		// act
		getByTestId("color").click();

		// assert
		expect(getByTestId("color").className).toContain("bg-neutral-900");
	});

	test("unhiglights an item on click", () => {
		// arrange
		const { getByTestId } = render(() => (
			<Menu
				show={true}
				defaultActiveItems={["black and white"]}
				onActiveItemsChange={onActiveItemsChange}
			/>
		));

		// act
		getByTestId("black and white").click();

		// assert
		expect(getByTestId("black and white").className).not.toContain(
			"bg-neutral-900",
		);
	});

	test("emits the active items on click", () => {
		// arrange
		const { getByTestId } = render(() => (
			<Menu
				show={true}
				defaultActiveItems={[]}
				onActiveItemsChange={onActiveItemsChange}
			/>
		));

		// act
		getByTestId("color").click();
		getByTestId("low-key").click();

		// assert
		expect(onActiveItemsChange).toHaveBeenCalledTimes(2);
		expect(onActiveItemsChange).toHaveBeenCalledWith(["color"]);
		expect(onActiveItemsChange).toHaveBeenCalledWith(["color", "low-key"]);
	});
});
