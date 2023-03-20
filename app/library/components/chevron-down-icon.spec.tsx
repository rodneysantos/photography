import { fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { describe, expect, it, vi } from "vitest";
import { ChevronDownIcon } from "./chevron-down-icon";

describe("ChevronDownIcon", () => {
	const handleClick = vi.fn();

	it("renders correctly", () => {
		// arrange
		const tree = renderer
			.create(<ChevronDownIcon onClick={handleClick} />)
			.toJSON();

		// assert
		expect(tree).toMatchSnapshot();
	});

	it("executes handleClick on click", () => {
		// arrange
		const { getByTestId } = render(<ChevronDownIcon onClick={handleClick} />);

		// act
		const icon = getByTestId("chevronDownIcon");
		fireEvent.click(icon);

		// assert
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
