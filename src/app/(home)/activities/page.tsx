"use client"

import Link from "next/link"
import Image from "next/image"
import LatestNews from "./_components/LatestContainer"
import { blogPosts } from "@/utils/data"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { useState } from "react"

import { FC } from "react"

interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

	return (
		<ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
			<li>
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 disabled:opacity-50 enabled:hover:border-primary-500 duration-300`}
				>
					<ChevronRightIcon />
				</button>
			</li>
			{pages.map((page) => (
				<li key={page}>
					<button
						onClick={() => onPageChange(page)}
						className={`block size-8 rounded border border-gray-100 text-center leading-8 hover:border-primary-450 duration-300 ${
							page === currentPage
								? "border-primary-200 bg-transparent text-black"
								: ""
						}`}
					>
						{page}
					</button>
				</li>
			))}
			<li>
				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="inline-flex size-8 items-center justify-center rounded border border-gray-100 disabled:opacity-50 enabled:hover:border-primary-500 duration-300"
				>
					<ChevronLeftIcon />
				</button>
			</li>
		</ol>
	)
}

const ITEMS_PER_PAGE = 4

export default function Activities() {
	const [paginatedPage, setPaginatedPage] = useState(1)

	const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE)
	const startIndex = (paginatedPage - 1) * ITEMS_PER_PAGE
	const currentPosts = blogPosts.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE,
	)

	return (
		<main className="max-w-screen-2xl mx-auto my-20">
			{/* highlighted news */}
			<section className="max-w-7xl mx-auto flex gap-10 my-10">
				<Link
					href="#"
					className="relative bg-[url('/images/activities/activity.png')] bg-cover w-2/3 h-[60vh] group"
				>
					<div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-white">
						<div className="flex justify-center align-middle flex-col z-20 w-full h-full p-8 group-hover:translate-y-3 group-hover:-translate-x-3 rounded-sm group-hover:shadow-lg border-[1px] border-transparent group-hover:border-slate-200 duration-150">
							<p className="text-gray-400 text-sm my-2">
								قراءة 10 دقائق
							</p>
							<p className="text-lg font-bold">
								طبعت مؤسسة الامام زين العابدين 1000 نسخة جديدة
								من كتاب الفرائد الطريفة في شرح الصحيفة الشريفة{" "}
							</p>
						</div>
					</div>
				</Link>
				<div className="w-1/3 h-[60vh] bg-opacity-40 flex flex-col">
					<div className="text-start p-4 text-2xl font-bold border-t-4 border-slate-600">
						آخبار الانجازات
					</div>
					<div className="w-10 h-1 bg-black" />
					{Array.from({ length: 3 }).map((_, index) => (
						<Link
							key={index}
							href=""
							className={`hover:text-primary-300 duration-150 p-4 py-8 ${
								index !== 2 &&
								"border-b-2 border-dashed border-"
							}`}
						>
							<p className="opacity-40 text-sm my-2">
								جمادى الأول 23
							</p>
							<p className="text-medium font-bold">
								طبعت مؤسسة الامام زين العابدين 1000 نسخة جديدة
								من كتاب الفرائد الطريفة في شرح الصحيفة الشريفة{" "}
							</p>
						</Link>
					))}
				</div>
			</section>
			{/* latest news section */}
			<section className="my-16">
				<LatestNews data={blogPosts} />
			</section>

			{/* posts  */}
			<section>
				<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
					<header>
						<h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
							جميع اخبار المؤسسة
						</h2>

						<p className="mt-4 max-w-md text-gray-500">
							ممكن تقسميها حسب الاصناف؟
						</p>
					</header>

					<ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{currentPosts.map((post) => (
							<li key={post.id}>
								<Link
									href={`activities/${post.slug}`}
									className="group block overflow-hidden"
								>
									<Image
										src={post.thumbnail}
										width={400}
										height={50}
										alt="post thumbnail"
										className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
									/>

									<div className="relative bg-white pt-3">
										<h3 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
											{post.title}
										</h3>

										<p className="mt-2">
											<span className="sr-only">
												الوصف
											</span>

											<span className="text-xs tracking-wider text-gray-900">
												{post.subtitle}
											</span>
										</p>
									</div>
								</Link>
							</li>
						))}
					</ul>

					<Pagination
						currentPage={paginatedPage}
						totalPages={totalPages}
						onPageChange={(page) => setPaginatedPage(page)}
					/>
				</div>
			</section>
		</main>
	)
}
