import type { CamelCasedProperties } from "type-fest";
import type { Timestamp } from "../models";

export function mapTimestamp(
	timestamp: Timestamp,
): CamelCasedProperties<Timestamp> {
	return {
		tagsUpdatedAt: timestamp.tags_updated_at,
		updatedAt: timestamp.updated_at,
	};
}
