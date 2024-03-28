export type User = {
	id: number
	username: string
	email: string
	password: string
	firstName: string
	lastName: string
	Role: Number
}

export enum actionTypes {
	Internal = "INTERNAL",
	External = "EXTERNAL",
}

export type actionLogs = {
	id: number
	userId: number
	actionType: actionTypes
}

export type Permissions = {
	id: number
	label: string
	description: string
}

export type Category = {
	id: number
	label: string
}

export type Book = {
	id: number
	isbn: string
	categoryId: number
	coverImageUrl: string
	title: string
	slug: string
	author: string
	editors: string[]
	description: string
	pagesCount: number
	chaptersCount: number
	issueDate: string
	publisher: string
	printHouse: string
	fileLocation: string
	availableLanguages: string[]
}

export type BlogPost = {
	id: number
	slug: string
	thumbnail: string
	title: string
	subtitle: string
	content: string
	date: string
}

export type SearchLog = {
	term: string
	lastSearched: string
	frequency: number
}
