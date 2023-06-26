interface Photo {
	url: string;
}

export async function fetchPhotosByTags(tags: string[]): Promise<Photo[]> {
	const baseURL = "http://localhost:8888/.netlify/functions/search";
	const url = `${baseURL}?tags=${tags.join(",")}`;
	const res = await fetch(url);
	const { data } = await res.json();

	return data;
}
