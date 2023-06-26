export interface Response {
	data: Photo[];
	error: unknown | null;
}

export interface Photo {
	url: string;
}
