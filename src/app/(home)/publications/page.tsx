"use client"

import Image from "next/image"
import { PublicationShowcaseCard } from "@/components/publications"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { books, categories } from "@/lib/data"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import { ListBulletIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState(categories[0])
	const filteredBooks = books.filter(
		(book) =>
			categories[book.categoryId] === selectedCategory ||
			selectedCategory === categories[0],
	)

	return (
		<main className="max-w-screen-2xl mx-auto my-10">
			{/* آخر الاصدارات */}
			<h2 className="text-3xl text-center m-4 my-12 font-semibold">
				آخر اصدارات المؤسسة
			</h2>
			<div className="bg-white shadow-md rounded-xl p-8 grid grid-cols-3 gap-10 my-8">
				{books.slice(0, 6).map((book, index) => (
					<PublicationShowcaseCard key={index} {...book} />
				))}
			</div>

			{/* كل الكتب */}
			<div className="text-center my-24">
				<h2 className="text-3xl my-4 font-semibold">
					كل اصدارات المؤسسة
				</h2>

				<div className="max-w-full my-10">
					<div className="flex">
						<div className="w-1/3">
							<Input
								className="w-fit"
								type="text"
								placeholder="ابحث"
							/>
						</div>

						<div className="flex flex-col md:flex-row gap-5 text-gray-500 text-lg w-1/3 justify-center">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() =>
										setSelectedCategory(category)
									}
									className={`cursor-pointer border-b-2 hover:text-primary border-transparent hover:border-primary hover:border-opacity-30 duration-300 p-2 text-center ${
										selectedCategory === category &&
										"border-b-secondary-700 text-secondary-700"
									}`}
								>
									{category}
								</button>
							))}
						</div>
						<div className="flex w-1/3 justify-end items-center">
							<Button
								variant={"ghost"}
								size={"icon"}
								className="p-1 border-[1px] border-transparent duration-300 hover:border-primary hover:bg-transparent hover:shadow-md rounded-md"
							>
								<ListBulletIcon />
							</Button>
						</div>
					</div>
					<AnimatePresence mode="wait">
						<motion.div
							key={selectedCategory}
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 10, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className=""
						>
							{filteredBooks.length > 0 ? (
								<div className="max-w-screen-2xl mx-auto grid gap-10 grid-cols-5 my-8">
									{filteredBooks.map((book) => (
										<Link
											href={`/publications/${book.slug}`}
											key={book.id}
											className="flex flex-col shadow-sm rounded-xl hover:-translate-y-2 hover:shadow-xl hover:border-primary-200 duration-300"
										>
											<Image
												src={book.coverImageUrl}
												className=" w-full rounded-t-xl"
												width={200}
												height={200}
												alt={book.title}
											/>
											<p className="text-start px-4 py-2 font-bold text-md">
												{book.title}
											</p>
											<p className="text-start px-4 font-light text-sm">
												{book.author}
											</p>
											<div className="flex gap-10 p-4">
												<Badge
													variant={"outline"}
													className="bg-slate-50 border-transparent text-sm font-light"
												>
													علوم انسانية
												</Badge>
												<p>{book.issueDate}</p>
											</div>
										</Link>
									))}
								</div>
							) : (
								<div className="w-full h-[40vh] flex justify-center items-center">
									<div className="p-16 text-center border-2 border-dashed rounded-2xl border-slate-400">
										لا توجد عناصر في هذا الصنف!
									</div>
								</div>
							)}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</main>
	)
}
