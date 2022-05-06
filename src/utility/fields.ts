export interface Form {
	fields: Fields[]
}

export interface Fields {
	title: string | "";
	name: string,
	type: "text" | "number";
}