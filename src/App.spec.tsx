import { cleanup, fireEvent, render } from "@solidjs/testing-library";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App", () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.mock("./service", () => ({
			fetchPhotosByTags: () =>
				Promise.resolve([{ id: 1, url: "path/to/photo" }]),
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

	it("sets the Lightbox when a photo is clicked", async () => {
		// arrange
		const { getByTestId } = render(() => <App />);

		// act
		await vi.runAllTimersAsync();
		fireEvent.click(getByTestId("gallery-list").children[0]);

		// assert
		expect(getByTestId("lightbox-photo").getAttribute("src")).toEqual(
			"path/to/photo",
		);
	});

	it("closes the Lightbox when the close button is clicked", async () => {
		// arrange
		const { getByTestId, queryByTestId } = render(() => <App />);
		await vi.runAllTimersAsync();

		// act
		fireEvent.click(getByTestId("gallery-list").children[0]);
		fireEvent.click(getByTestId("lightbox-close"));

		// assert
		expect(queryByTestId("lightbox")).toEqual(null);
	});
});
