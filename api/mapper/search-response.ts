import type { CamelCasedPropertiesDeep } from "type-fest";
import type { Resource, SearchResponse } from "./../models";

export function mapSearchResponse(
	resource: CamelCasedPropertiesDeep<Resource>,
): SearchResponse {
	return {
		url: resource.secureUrl,
	};
}
