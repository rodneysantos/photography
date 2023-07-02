import type { CamelCasedProperties } from "type-fest";
import { Author } from "../models";

export function mapAuthor(author: Author): CamelCasedProperties<Author> {
	return {
		accessKey: author.access_key,
		customId: author.custom_id,
		externalId: author.external_id,
	};
}
