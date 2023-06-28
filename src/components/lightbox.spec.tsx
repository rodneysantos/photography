import { cleanup, render } from "@solidjs/testing-library";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Photo } from "../models";
import { Lightbox } from "./lightbox";

describe("lightbox", () => {
	const onCloseMock = vi.fn();
	const photo: Photo = { url: "photo" };

	afterEach(cleanup);

	afterEach(() => {
		vi.resetAllMocks();
	});

	it("renders correctly", () => {
		// assemble
		const { asFragment } = render(() => (
			<Lightbox photo={photo} onClose={onCloseMock} />
		));

		// assert
		expect(asFragment()).toMatchSnapshot();
	});

	it("close button calls onClose", () => {
		// assemble
		const { getByTestId } = render(() => (
			<Lightbox photo={photo} onClose={onCloseMock} />
		));
		const closeButton = getByTestId("lightbox-close");

		// act
		closeButton.click();

		// assert
		expect(onCloseMock).toHaveBeenCalled();
	});

	it("does not render when photo is undefined", () => {
		// assemble
		const { queryByTestId } = render(() => (
			<Lightbox photo={undefined} onClose={onCloseMock} />
		));

		// assert
		expect(queryByTestId("lightbox")).toBeNull();
	});
});
