"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { books, activities } from "@/lib/data"

export default function Breadcrumb() {
	const paths = usePathname()
	const pathNames = paths.split("/").filter((path) => path)
	pathNames.unshift("الرئيسية")

	const pages: { [key: string]: string }[] = [
		{ publications: "إصدارات" },
		{ activities: "أنشطة" },
	]

	return (
		<div className="w-full p-12">
			<nav aria-label="breadcrumb" className="w-full flex justify-center">
				<ol className="flex w-fit bg-slate-50 p-4 flex-wrap items-center rounded-2xl bg-blue-gray-50 bg-opacity-60 py-2 px-4">
					{pathNames.map((path, index) => (
						<li
							key={index}
							className={`flex cursor-pointer items-center text-2xl leading-normal text-blue-gray-900 antialiased transition-colors duration-300 ${
								index === pathNames.length - 1
									? "hover:text-primary-300 "
									: "hover:text-primary-300 opacity-60"
							}`}
						>
							<Link
								href={`/${
									pathNames.indexOf(path) === 0
										? "/"
										: pathNames
												.slice(1, index + 1)
												.join("/")
								}`}
							>
								<span>
									{index == 0
										? path
										: index == 1
										? pages.map((link) => link[path])
										: books.find((b) => b.slug === path)
												?.title}
								</span>
							</Link>
							{index !== pathNames.length - 1 && (
								<span className="pointer-events-none mx-2 select-none text-sm font-normal leading-normal text-blue-gray-500 antialiased">
									/
								</span>
							)}
						</li>
					))}
				</ol>
			</nav>
		</div>
	)
}
