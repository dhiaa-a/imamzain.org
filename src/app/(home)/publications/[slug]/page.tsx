"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

import { books } from "@/utils/data"

import { DownloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { ShareIcon } from "@/components/icons"
import clsx from "clsx"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Page({ params }: { params: { slug: string } }) {
	const [activePage, setActivePage] = useState(1)
	const book = books.filter((book) => book.slug === params.slug)[0]

	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		// page container
		<div className="flex flex-col justify-center items-center">
			{/* book info container */}
			<div className="relative my-40 flex flex-col justify-center max-w-screen-xl w-full gap-10 rounded-lg bg-gray-50 shadow-md pt-52">
				{/* image and main info container */}
				<div className="absolute -top-44 flex w-full justify-center gap-20 items-center">
					{/* image container */}
					<div className="overflow-hidden drop-shadow-sm flex md:justify-center">
						<Image
							width={600}
							height={600}
							className="w-60 object-cover rounded-xl border-opacity-45 border-2 border-gray-200 "
							src={book.coverImageUrl}
							alt={book.title}
						/>
					</div>
					<div className=" flex flex-col gap-10">
						<div>
							<h1 className="text-2xl font-bold mb-4">
								{book.title}
							</h1>
							<p className="text-xl font-semibold text-gray-400">
								تأليف {book.author}
							</p>
						</div>
						<div className="pb-4 w-full border-b-2 border-slate-300 flex justify-between">
							<Button
								variant={"default"}
								className="bg-primary text-md p-5 rounded-full flex gap-4 items-center duration-300"
							>
								<p>قم بتنزيل الكتاب</p>
								<DownloadIcon />
							</Button>
							<Button
								variant={"outline"}
								size={"icon"}
								className="rounded-full"
							>
								<ShareIcon />
							</Button>
						</div>
					</div>
				</div>
				<div className="w-3/4 mx-auto flex justify-start gap-10 pb-10 border-b-2 border-slate-300">
					<div className="w-1/3">
						<ul>
							<li>
								<p className="text-2xl font-semibold my-2">
									المحررين
								</p>
								<ul className="list-disc mr-10 text-md">
									{book.editors.map((editor) => (
										<li key={editor}>{editor}</li>
									))}
								</ul>
							</li>
							<li>
								<p className="text-2xl font-semibold my-2">
									اللغة
								</p>
								<ul className="list-disc mr-10 text-md">
									{book.availableLanguages.map((lang) => (
										<li key={lang}>{lang}</li>
									))}
								</ul>
							</li>
							<li>
								<p className="text-2xl font-semibold my-2">
									تفاصيل الكتاب
								</p>
								<ul className="list-disc mr-10 text-md">
									<li>
										<div className="flex gap-x-2">
											<div>عدد الصفحات:</div>
											<div>{book.pagesCount || 0}</div>
										</div>
									</li>
									<li>
										<div className="flex gap-x-2">
											<div>عدد الاجزاء:</div>
											<div>{book.chaptersCount || 0}</div>
										</div>
									</li>
									<li>
										<div className="flex gap-x-2">
											<div>دار النشر:</div>
											<div>{book.publisher || ""}</div>
										</div>
									</li>
									<li>
										<div className="flex gap-x-2 flex-nowrap text-nowrap">
											<div>دار الطبع:</div>
											<div>{book.printHouse || ""}</div>
										</div>
									</li>
									<li>
										<div className="flex gap-x-2">
											<div>ISBN:</div>
											<div>{book.isbn || "لا يوجد"}</div>
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="w-1/2">
						<h2 className="text-2xl font-semibold">الوصف</h2>
						<p className="text-gray-600 mr-10 text-lg text-justify">
							{book.description}
						</p>
					</div>
				</div>
				<div className="text-center w-3/4 mx-auto">
					<h1 className="text-4xl mb-8 font-extralight">
						الفصل الاول
					</h1>
					<h2 className="text-xl font-semibold mb-10">المقدمة</h2>
					<p className="text-justify text-pretty text-xl leading-10">
						Call me Ishmael. Some years ago—never mind how long
						precisely—having little or no money in my purse, and
						nothing particular to interest me on shore, I thought I
						would sail about a little and see the watery part of the
						world. It is a way I have of driving off the spleen and
						regulating the circulation. Whenever I find myself
						growing grim about the mouth; whenever it is a damp,
						drizzly November in my soul; whenever I find myself
						involuntarily pausing before coffin warehouses, and
						bringing up the rear of every funeral I meet; and
						especially whenever my hypos get such an upper hand of
						me, that it requires a strong moral principle to prevent
						me from deliberately stepping into the street, and
						methodically knocking people’s hats off—then, I account
						it high time to get to sea as soon as I can. This is my
						substitute for pistol and ball. With a philosophical
						flourish Cato throws himself upon his sword; I quietly
						take to the ship. There is nothing surprising in this.
						If they but knew it, almost all men in their degree,
						some time or other, cherish very nearly the same
						feelings towards the ocean with me. There now is your
						insular city of the Manhattoes, belted round by wharves
						as Indian isles by coral reefs—commerce surrounds it
						with her surf. Right and left, the streets take you
						waterward. Its extreme downtown is the battery, where
						that noble mole is washed by waves, and cooled by
						breezes, which a few hours previous were out of sight of
						land. Look at the crowds of water-gazers there.
					</p>
				</div>
				<div className="w-full flex justify-center">
					<div className="absolute -bottom-10 p-4 rounded-full bg-gray-100 shadow-lg w-1/2 mx-auto border-2 border-slate-200 flex justify-around items-center">
						{[...Array.from({ length: 10 })].map((_, index) => (
							<button
								key={index}
								onClick={() => setActivePage(index)}
								className={clsx(
									"rounded-full text-sm w-8 h-8 justify-center items-center flex border-2 duration-150",
									{
										" border-primary-500":
											activePage === index,
										"border-transparent hover:border-primary-200":
											activePage !== index,
									},
								)}
							>
								{index + 1}
							</button>
						))}
					</div>
				</div>
			</div>
			<div className="w-full">
				<Separator className="w-1/2 rounded-full h-0.5 mx-auto bg-primary" />
				<h2 className="text-3xl font-semibold text-center my-10">
					كتب ذات صلة
				</h2>
				<Carousel
					opts={{ startIndex: books.length - 1 }}
					setApi={setApi}
					className="w-2/3 mx-auto"
				>
					<CarouselContent className="flex-row-reverse">
						{books.map((book, index) => (
							<CarouselItem key={index} className="md:basis-1/4">
								<Link
									href={`/publications/${book.slug}`}
									key={index}
									className="flex flex-col shadow-sm rounded-xl hover:-translate-y-2 hover:shadow-xl hover:border-primary-200 duration-300"
								>
									<Image
										src={book.coverImageUrl}
										className="w-full rounded-t-xl"
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
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<div className="py-2 text-center text-sm text-muted-foreground">
					صفحة {count - current + 1} من {count}
				</div>
			</div>
		</div>
	)
}
