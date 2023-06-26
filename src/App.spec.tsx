import { cleanup, render } from "@solidjs/testing-library";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App", () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.mock("./service", () => ({
			fetchPhotosByTags: () => Promise.resolve(["photo"]),
		}));
	});

	afterEach(() => {
		vi.clearAllTimers();
	});

	afterEach(cleanup);

	it("renders correctly", () => {
		// arrange
		const { asFragment } = render(() => <App />);

		// assert
		expect(asFragment()).toMatchSnapshot();
	});

	it("updates the gallery on menu item click", async () => {
		// arrange
		const { getByTestId } = render(() => <App />);

		// act
		getByTestId("color").click();
		await vi.runAllTimersAsync();

		// assert
		expect(getByTestId("gallery-list").children.length).toBe(1);
	});
});
