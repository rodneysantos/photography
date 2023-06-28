import { cleanup, render } from "@solidjs/testing-library";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Gallery } from "./gallery";

describe("gallery", () => {
	const onPhotoClick = vi.fn();

	afterEach(cleanup);

	it("renders correctly", () => {
		// act
		const { asFragment } = render(() => (
			<Gallery photos={[]} onPhotoClick={onPhotoClick} />
		));

		// assert
		expect(asFragment()).toMatchSnapshot();
	});

	it("renders the photos", () => {
		// arrange
		const photos = [
			{ id: 1, url: "photo1" },
			{ id: 2, url: "photo2" },
			{ id: 3, url: "photo3" },
		];

		// act
		const { getAllByAltText } = render(() => (
			<Gallery photos={photos} onPhotoClick={onPhotoClick} />
		));

		// assert
		expect(getAllByAltText("")).toHaveLength(3);
	});

	it("emits the photo id on click", () => {
		// arrange
		const photos = [
			{ id: 1, url: "photo1" },
			{ id: 2, url: "photo2" },
			{ id: 3, url: "photo3" },
		];

		// act
		const { getAllByAltText } = render(() => (
			<Gallery photos={photos} onPhotoClick={onPhotoClick} />
		));
		getAllByAltText("")[0].click();

		// assert
		expect(onPhotoClick).toHaveBeenCalledWith(photos[0]);
	});
});
