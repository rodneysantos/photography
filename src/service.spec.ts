import { describe, expect, it, vi } from "vitest";
import { fetchPhotosByTags } from "./service";

describe("service", () => {
	it("fetches the images by tags", async () => {
		// arrange
		const tags = ["tag1", "tag2"];
		const data = [{ url: "http://example.com/image.jpg" }];
		const fetch = vi.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve({ data }),
			}),
		);
		vi.stubGlobal("fetch", fetch);

		// act
		const photos = await fetchPhotosByTags(tags);

		// assert
		expect(photos).toEqual(data);
		expect(fetch).toHaveBeenCalledWith(
			`http://localhost:8888/.netlify/functions/search?tags=${tags.join(",")}`,
		);
	});
});
