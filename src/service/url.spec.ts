import { describe, expect, it, vi } from "vitest";
import { getSelectedPhoto, hasSelectedPhoto, updateSelectedPhoto } from "./url";

describe("url", () => {
	const pushStateMock = vi.fn();

	it("returns the selected photo", () => {
		// assemble
		stubWindowLocationSearch("?photo=photo.jpg");
		const url =
			"https://res.cloudinary.com/dyas9k0mc/image/upload/v1678240117/photo.jpg";

		// act
		const photo = getSelectedPhoto();

		// assert
		expect(photo).toBe(url);
	});

	it("returns null if no photo is selected", () => {
		// assemble
		stubWindowLocationSearch("");

		// act
		const photo = getSelectedPhoto();

		// assert
		expect(photo).toBe(null);
	});

	it("returns false if no photo is selected", () => {
		// assemble
		stubWindowLocationSearch("");

		// act
		const hasPhoto = hasSelectedPhoto();

		// assert
		expect(hasPhoto).toBe(false);
	});

	it("returns true if a photo is selected", () => {
		// assemble
		stubWindowLocationSearch("?photo=photo.jpg");

		// act
		const hasPhoto = hasSelectedPhoto();

		// assert
		expect(hasPhoto).toBe(true);
	});

	it("updates the selected photo", () => {
		// assemble
		stubWindowLocationSearch("");
		const photo = {
			url: "https://res.cloudinary.com/dyas9k0mc/image/upload/v1678240117/photo.jpg",
		};

		// act
		updateSelectedPhoto(photo);

		// assert
		expect(pushStateMock).toHaveBeenCalledWith({}, "", "?photo=photo.jpg");
	});

	it("clears the selected photo", () => {
		// assemble
		stubWindowLocationSearch("?photo=photo.jpg");

		// act
		updateSelectedPhoto(null);

		// assert
		expect(pushStateMock).toHaveBeenCalledWith({}, "", "/");
	});

	function stubWindowLocationSearch(search: string) {
		vi.stubGlobal("window", {
			history: {
				pushState: pushStateMock,
			},
			location: {
				search,
			},
		});
	}
});
