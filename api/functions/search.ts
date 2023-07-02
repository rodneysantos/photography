import type { Handler, HandlerEvent } from "@netlify/functions";
import type { RequestInit } from "node-fetch";
import fetch, { Headers } from "node-fetch";
import { mapResource, mapSearchResponse } from "../mapper";
import type { Cloudinary } from "./../models";

const handler: Handler = async (event: HandlerEvent) => {
	const tags = event.queryStringParameters?.tags || "";
	const { data, error } = await getImages(tags);
	let statusCode = 200;

	if (error) {
		statusCode = 500;
	}

	return {
		statusCode,
		body: JSON.stringify({ data, error }),
	};
};

async function getImages(tags: string) {
	const formattedTags = tags
		.split(",")
		.map((t) => `tags:${t}`)
		.join(" || ");
	const url = "https://api.cloudinary.com/v1_1/dyas9k0mc/resources/search";
	const headers = prepareHeaders();

	const requestOptions: RequestInit = {
		method: "GET",
		headers,
		redirect: "follow",
	};

	try {
		const response = await fetch(
			`${url}?expression=${formattedTags}&tags=true`,
			requestOptions,
		);
		const data = (await response.json()) as Cloudinary;

		return {
			data: data.resources.map((res) => mapSearchResponse(mapResource(res))),
			error: null,
		};
	} catch (error) {
		return { data: null, error };
	}
}

function prepareHeaders() {
	const { env } = process;
	const headers = new Headers();
	headers.append("Content-Type", "application/json");
	headers.append(
		"Authorization",
		`Basic ${btoa(`${env.API_KEY}:${env.API_SECRET}`)}`,
	);

	return headers;
}

export { handler };
