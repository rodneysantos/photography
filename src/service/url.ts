import { Photo } from "../models";

const cloudinaryBaseURL = "https://res.cloudinary.com";
const basePath = "dyas9k0mc/image/upload/v1678240117";

export const getSelectedPhoto = () => {
	const params = new URLSearchParams(window.location.search);
	const photo = params.get("photo");

	if (photo) {
		return [cloudinaryBaseURL, basePath, photo].join("/");
	}

	return null;
};

export const hasSelectedPhoto = () => {
	return !!getSelectedPhoto();
};

export const updateSelectedPhoto = (photo: Photo | null) => {
	if (photo === null) {
		window.history.pushState({}, "", "/");
		return;
	}

	const name = photo.url.split("/").pop();
	window.history.pushState({}, "", `?photo=${name}`);
};
