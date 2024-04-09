"use client"

import { Button } from "./ui/button"
import Link from "next/link"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel"
import {
	ArrowLeftIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons"
import { useRef, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { BlogPost } from "@/utils/definitions"

import { blogPosts } from "@/utils/data"

export default function Activities() {
	const carouselPreviousRef = useRef<HTMLButtonElement | null>(null)
	const carouselNextRef = useRef<HTMLButtonElement | null>(null)
	const [selected, setSelected] = useState(2)

	return (
		<div className="flex gap-2 p-10 items-center ">
			<article className="prose text-right w-1/4 p-4 mx-auto">
				<h1 className="text-3xl mb-1">انشطتنا</h1>
				<p className="text-sm text-slate-500 pt-0 mt-0 mb-10">
					تابع آخر اخبار المؤسسة وفعالياتها
				</p>
				<p>
					تهتم مؤسستنا بالجوانب العملية وتلامس مختلف جوانب الحياة لنشر
					وتوفير فرص التعرف على بركات الامام زين العابدين (ع) من خلال
					اقامة مختلف الانشطة العملية والعلمية
				</p>
				<Button
					variant={"ghost"}
					className="text-primary group space-x-4 text-lg -mr-4 hover:bg-transparent duration-300"
				>
					<ArrowLeftIcon className="text-secondary translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ease-in-out duration-300" />
					<p className="group-hover:text-secondary duration-300 ease-in-out">
						اعرض المزيد
					</p>
				</Button>
				<div className="flex items-center gap-2 justify-end">
					<hr className="w-5/6 h-0.5 bg-secondary opacity-40 my-2" />
					<div className="flex gap-2">
						<ChevronRightIcon
							onClick={() => {
								carouselNextRef.current?.click()
								if (selected !== 2) {
									setSelected(selected + 1)
								}
							}}
							height={32}
							width={32}
							className={clsx(
								"w-auto border-2 rounded-full duration-300 ease-in-out ",
								{
									"border-primary hover:text-primary cursor-pointer":
										selected !== 2,
									"border-gray-400 cursor-default text-gray-400":
										selected === 2,
								},
							)}
						/>
						<ChevronLeftIcon
							onClick={() => {
								carouselPreviousRef.current?.click()
								if (selected !== 0) {
									setSelected(selected - 1)
								}
							}}
							height={32}
							width={32}
							className={clsx(
								"w-auto border-2 rounded-full duration-300 ease-in-out ",
								{
									"border-primary hover:text-primary cursor-pointer":
										selected !== 0,
									"border-gray-400 text-gray-400":
										selected === 0,
								},
							)}
						/>
					</div>
				</div>
			</article>
			<Carousel
				opts={{ startIndex: blogPosts.length - 1, dragFree: false }}
				className="w-3/4 mx-auto"
			>
				<CarouselContent className="-ml-1 flex-row-reverse">
					{blogPosts.map((blogPost, index) => (
						<CarouselItem
							key={index}
							className="md:basis-1/2 lg:basis-1/4 p-4"
						>
							<BigActivityCard blogPost={blogPost} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious
					ref={carouselPreviousRef}
					className="hidden"
				/>
				<CarouselNext ref={carouselNextRef} className="hidden" />
			</Carousel>
		</div>
	)
}

export const BigActivityCard = ({ blogPost }: { blogPost: BlogPost }) => {
	return (
		<Link href={blogPost.slug} className="block">
			<Image
				width={150}
				height={150}
				alt="activity"
				src={blogPost.thumbnail}
				className="h-full w-full object-cover"
			/>
			<div className="mt-8">
				<dl>
					<div className="my-2">
						<dt className="sr-only">وقت القراءة</dt>
						<dd className="text-sm text-slate-600">
							{blogPost.content.length} دقائق من القراءة
						</dd>
					</div>
					<div className="my-2">
						<dt className="sr-only">العنوان</dt>
						<dd className="font-bold text-xl">{blogPost.title}</dd>
					</div>
					<div className="my-2">
						<dt className="sr-only">ملخص</dt>
						<dd className="text-medium text-slate-500">
							<p
								className="line-clamp-2
							"
							>
								{blogPost.subtitle}
							</p>
						</dd>
					</div>
				</dl>
			</div>
		</Link>
	)
}
