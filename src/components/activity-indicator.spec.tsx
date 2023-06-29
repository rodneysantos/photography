import { render } from "@solidjs/testing-library";
import lottie, { AnimationItem } from "lottie-web";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ActivityIndicator } from "./activity-indicator";

vi.mock("lottie-web");

describe("activity-indicator", () => {
	const destroyMock = vi.fn();
	const setSpeedMock = vi.fn();

	beforeEach(() => {
		vi.spyOn(lottie, "loadAnimation").mockReturnValue({
			setSpeed: setSpeedMock,
			destroy: destroyMock,
		} as unknown as AnimationItem);
	});

	it("renders correctly", () => {
		// assemble
		const { asFragment } = render(() => <ActivityIndicator />);

		// assert
		expect(asFragment()).toMatchSnapshot();
	});

	it("sets the speed on mount", () => {
		// assemble
		render(() => <ActivityIndicator />);

		// assert
		expect(setSpeedMock).toHaveBeenCalledWith(2.5);
	});

	it("destroys the animation on cleanup", () => {
		// assemble
		const { unmount } = render(() => <ActivityIndicator />);

		// act
		unmount();

		// assert
		expect(destroyMock).toHaveBeenCalled();
	});
});
