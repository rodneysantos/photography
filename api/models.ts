export interface SearchResponse {
	url: string;
}

export interface Cloudinary {
	total_count: number;
	time: number;
	resources: Resource[];
}

export interface Resource {
	asset_id: string;
	public_id: string;
	folder: string;
	filename: string;
	format: string;
	version: number;
	resource_type: string;
	type: string;
	created_at: string;
	uploaded_at: string;
	bytes: number;
	backup_bytes: number;
	width: number;
	height: number;
	aspect_ratio: number;
	pixels: number;
	url: string;
	secure_url: string;
	status: string;
	access_mode: string;
	access_control: string | null;
	etag: string;
	created_by: Author;
	uploaded_by: Author;
	last_updated: Timestamp;
}

export interface Author {
	access_key: string;
	custom_id: string;
	external_id: string;
}

export interface Timestamp {
	tags_updated_at: string;
	updated_at: string;
}
