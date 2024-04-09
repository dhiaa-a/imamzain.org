"use client"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

import { BigActivityCard } from "@/components/activities"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { useRef } from "react"

import { BlogPost } from "@/utils/definitions"
export default function LatestNews({ data }: { data: BlogPost[] }) {
	const slidePrevButton = useRef<HTMLButtonElement | null>(null)
	const slideNextButton = useRef<HTMLButtonElement | null>(null)
	return (
		<>
			<div className="flex gap-2 align-middle max-w-7xl mx-auto">
				<p className="font-bold text-3xl ml-10">اخر الاخبار</p>
				<button className="rounded-full px-2.5 py-2 border-[1px] border-slate-800 hover:text-primary-500 hover:border-primary-500 duration-300">
					<ChevronRightIcon
						onClick={() => slidePrevButton.current?.click()}
					/>
				</button>
				<button className="rounded-full px-2.5 py-2 border-[1px] border-slate-800 hover:text-primary-500 hover:border-primary-500 duration-300">
					<ChevronLeftIcon
						onClick={() => slideNextButton.current?.click()}
					/>
				</button>
			</div>
			<Carousel
				opts={{ align: "start", dragFree: true }}
				className="max-w-7xl mx-auto flex gap-8 my-8"
			>
				<CarouselContent>
					{data.map((blog, _) => (
						<CarouselItem
							key={blog.id}
							className="md:basis-1/3 lg:basis-1/4"
						>
							<BigActivityCard blogPost={blog} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden" ref={slidePrevButton} />
				<CarouselNext className="hidden" ref={slideNextButton} />
			</Carousel>
		</>
	)
}
