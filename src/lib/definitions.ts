export type Category = {
	label: string
	books: Book[]
}

export type Book = {
	id: number
	isbn: string
	categoryId: number
	coverImageUrl: string
	title: string
	author: string
	pagesCount: number
	chaptersCount: number
	issue_date: string
}
