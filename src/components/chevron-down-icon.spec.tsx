import { cleanup, fireEvent, render } from "@solidjs/testing-library";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { ChevronDownIcon } from "./chevron-down-icon";

describe("ChevronDownIcon", () => {
	const handleClick = vi.fn();

	beforeEach(() => {
		handleClick.mockReset();
	});

	afterEach(cleanup);

	test("renders correctly", () => {
		// arrange
		const { asFragment } = render(() => (
			<ChevronDownIcon show={true} onClick={handleClick} />
		));

		// assert
		expect(asFragment()).toMatchSnapshot();
	});

	test("executes handleClick on click", () => {
		// arrange
		const { getByTestId } = render(() => (
			<ChevronDownIcon show={true} onClick={handleClick} />
		));

		// act
		fireEvent.click(getByTestId("chevronDownIcon"));

		// assert
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
