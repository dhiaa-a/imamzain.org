"use client"

import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
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

export default function Activities() {
	const carouselPreviousRef = useRef<HTMLButtonElement | null>(null)
	const carouselNextRef = useRef<HTMLButtonElement | null>(null)

	const activities = Array.from({ length: 5 })
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
				opts={{ startIndex: activities.length - 1, dragFree: false }}
				className="w-3/4 mx-auto"
			>
				<CarouselContent className="-ml-1 flex-row-reverse">
					{activities.map((_, index) => (
						<CarouselItem
							key={index}
							className="md:basis-1/2 lg:basis-1/4 p-4"
						>
							<ActivityCard />
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

const ActivityCard = () => {
	return (
		<Link
			href="#"
			className="block rounded-lg shadow-md shadow-slate-200 hover:shadow-slate-300 duration-300 hover:-translate-y-2 hover:shadow-lg"
		>
			<Image
				width={300}
				height={300}
				alt="activity"
				src="/images/activities/activity.png"
				className="h-56 w-full rounded-t-md object-cover"
			/>
			<div className="mt-2 mr-2 p-4">
				<dl>
					<div>
						<dt className="sr-only">الصنف</dt>
						<dd className="text-sm text-primary">ندوات</dd>
					</div>
					<div>
						<dt className="sr-only">العنوان</dt>
						<dd className="font-medium my-2">
							أثر الصحيفة السجادية في الفكر الاسلامي الحديث
						</dd>
					</div>
					<div>
						<dt className="sr-only">ملخص</dt>
						<dd className="text-xs text-slate-500">
							<p className="line-clamp-2">
								اقامت مؤسسة الامام زين العابدين (ع) مؤتمرا
								بالعنوان المذكور واستضافت السيد احمد الاشكوري
								للمشاركة في اللجنة التحكيمية
							</p>
						</dd>
					</div>
				</dl>
				<div className="mt-6 flex items-center gap-8 text-xs justify-between">
					<div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
						<div className="mt-1.5 sm:mt-0">
							<Badge
								variant="secondary"
								className="font-light py-2 px-3 rounded-full"
							>
								قراءة: 3 دقائق
							</Badge>
						</div>
					</div>
					<div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
						<div className="mt-1.5 sm:mt-0">
							<p className="text-gray-500 text-sm tracking-wide">
								21 جمادى الآخرة 1445هـ
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}
