import { CamelCasedPropertiesDeep } from "type-fest";
import { Resource } from "../models";
import { mapAuthor, mapTimestamp } from "./";

export function mapResource(
	resource: Resource,
): CamelCasedPropertiesDeep<Resource> {
	return {
		assetId: resource.asset_id,
		publicId: resource.public_id,
		folder: resource.folder,
		filename: resource.filename,
		format: resource.format,
		version: resource.version,
		resourceType: resource.resource_type,
		type: resource.type,
		createdAt: resource.created_at,
		uploadedAt: resource.uploaded_at,
		bytes: resource.bytes,
		backupBytes: resource.backup_bytes,
		width: resource.width,
		height: resource.height,
		aspectRatio: resource.aspect_ratio,
		pixels: resource.pixels,
		url: resource.url,
		secureUrl: resource.secure_url,
		status: resource.status,
		accessMode: resource.access_mode,
		accessControl: resource.access_control,
		etag: resource.etag,
		createdBy: mapAuthor(resource.created_by),
		uploadedBy: mapAuthor(resource.uploaded_by),
		lastUpdated: mapTimestamp(resource.last_updated),
	};
}
