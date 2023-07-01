interface Photo {
	url: string;
}

export async function fetchPhotosByTags(tags: string[]): Promise<Photo[]> {
	const baseURL = `${
		import.meta.env.VITE_NETLIFY_FUNCTION_BASE_URL
	}/.netlify/functions/search`;
	const url = `${baseURL}?tags=${tags.join(",")}`;
	const res = await fetch(url);
	const { data } = await res.json();

	return data;
}
