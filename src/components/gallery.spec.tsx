import { cleanup, render } from "@solidjs/testing-library";
import { afterEach, describe, expect, it } from "vitest";
import { Gallery } from "./gallery";

describe("gallery", () => {
	afterEach(cleanup);

	it("renders correctly", () => {
		// act
		const { asFragment } = render(() => <Gallery photos={[]} />);

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
		const { getAllByAltText } = render(() => <Gallery photos={photos} />);

		// assert
		expect(getAllByAltText("")).toHaveLength(3);
	});
});
