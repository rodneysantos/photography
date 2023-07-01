import { cleanup, render } from "@solidjs/testing-library";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Snap } from "./snap";

describe("snap", () => {
	const onClickMock = vi.fn();
	const photo = {
		id: "1",
		url: "image.jpg",
		title: "photo",
	};

	afterEach(cleanup);

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("matches snapshot", () => {
		// act
		const { asFragment } = render(() => (
			<Snap photo={photo} alt="photo" onClick={onClickMock} />
		));

		// assert
		expect(asFragment()).toMatchSnapshot();
	});

	it("calls onClick when clicked", () => {
		// act
		const { getByAltText } = render(() => (
			<Snap photo={photo} alt="photo" onClick={onClickMock} />
		));
		getByAltText("photo").click();

		// assert
		expect(onClickMock).toHaveBeenCalledWith(photo);
	});
});
