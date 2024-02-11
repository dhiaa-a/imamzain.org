"use client"

import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

import type { Book } from "@/lib/definitions"
import { books, categories } from "@/lib/data"

const Publications = () => {
	const [selectedCategory, setSelectedCategory] = useState(categories[0])
	const filteredBooks = books
		.slice(books.length - 5, books.length - 1)
		.filter(
			(book) =>
				categories[book.categoryId] === selectedCategory ||
				selectedCategory === categories[0],
		)

	return (
		<div className="max-w-7xl mx-auto my-10 md:max-w-5xl lg:max-w-7xl">
			<div className="flex flex-col justify-between mt-16 mb-24 items-center md:flex-row md:items-start">
				<h3 className="text-4xl font-semibold mb-8 md:mb-0">
					اصداراتنا
				</h3>
				<div className="flex flex-col md:flex-row gap-5 text-gray-500 text-lg">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`cursor-pointer border-b-2 hover:text-primary border-transparent hover:border-primary hover:border-opacity-30 duration-300 p-2 text-center ${
								selectedCategory === category &&
								"border-b-secondary-700 text-secondary-700"
							}`}
						>
							{category}
						</button>
					))}
				</div>
				<div>
					<Button
						variant={"ghost"}
						className="text-primary group space-x-4 text-lg -mr-4 hover:bg-transparent duration-300"
					>
						<p className="group-hover:text-secondary duration-300 ease-in-out">
							اعرض المزيد
						</p>
						<ArrowLeftIcon className="text-secondary -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 ease-in-out duration-300" />
					</Button>
				</div>
			</div>
			<AnimatePresence mode="wait">
				<motion.div
					key={selectedCategory}
					initial={{ x: -10, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 10, opacity: 0 }}
					transition={{ duration: 0.2 }}
					className=""
				>
					{filteredBooks.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							{filteredBooks.map((book) => (
								<PublicationShowcaseCard
									key={book.id}
									{...book}
								/>
							))}
						</div>
					) : (
						<div className="w-full flex justify-center items-center">
							<div className="p-16 text-center border-2 border-dashed rounded-2xl border-slate-400">
								لا توجد كتب في هذا الصنف!
							</div>
						</div>
					)}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export const PublicationShowcaseCard = (book: Book) => (
	<div className="group my-14 flex flex-col md:flex-row max-w-xl cursor-pointer gap-8 rounded-lg bg-gray-100 px-8 pb-10 pt-8 shadow-md duration-300 ease-in-out hover:-translate-y-1 hover:drop-shadow-md">
		<div className="-mt-32 flex justify-center overflow-hidden rounded-xl  border-opacity-45 drop-shadow-sm md:justify-end md:w-1/2">
			<Image
				width={200}
				height={300}
				className="w-auto h-auto mx-auto max-h-64 rounded-xl scale-100 object-cover duration-300 ease-in-out"
				src={book.coverImageUrl}
				alt="Book cover"
			/>
		</div>
		<div className="flex flex-col justify-between md:w-1/2">
			<div className="">
				<h2 className="text-lg font-semibold duration-300 group-hover:drop-shadow-sm">
					{book.title}
				</h2>
				<p className="text-sm tracking-tight text-slate-400 mb-5 mt-2">
					تأليف {book.author}
				</p>
			</div>
			<div className="flex flex-col md:flex-row justify-around gap-2 text-xs font-extralight text-gray-400">
				<span>{book.pagesCount} صفحة</span>
				<span>{book.chaptersCount} فصول</span>
				<span>{book.issueDate}</span>
			</div>
		</div>
	</div>
)

export default Publications
