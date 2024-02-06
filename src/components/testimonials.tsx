"use client"

import { useRef, useEffect, useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
} from "./ui/carousel"

export default function Testimonials() {
	const [pointerInside, setPointerInside] = useState(false)
	const carouselPreviousRef = useRef<HTMLButtonElement | null>(null)

	useEffect(() => {
		let intervalId: NodeJS.Timeout

		const intervalFunction = () => {
			carouselPreviousRef.current?.click()
		}

		const startInterval = () => {
			intervalId = setInterval(intervalFunction, 3000)
		}

		const clearAndPauseInterval = () => {
			clearInterval(intervalId)
		}

		if (pointerInside) {
			clearAndPauseInterval()
		} else {
			startInterval()
		}

		// Clean up the interval when the component is unmounted
		return () => clearInterval(intervalId)
	}, [pointerInside])

	return (
		<>
			<div className="flex max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-9 lg:px-6 justify-center items-start">
				<svg
					className="opacity-25 h-12 mx-8 mb-3 text-gray-400 dark:text-gray-600"
					viewBox="0 0 24 27"
					fill="none"
				>
					<path
						d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
						fill="currentColor"
					/>
				</svg>
				<div className="mb-8">
					<h2 className="text-3xl font-semibold mb-4">
						الشهادات والتوصيات
					</h2>
					<p className="font-light text-sm text-slate-800">
						اقرأ ماذا يقال عن المؤسسة واعمالها
					</p>
				</div>
				<svg
					className="opacity-25 h-12 mx-8 mb-3 text-gray-400 dark:text-gray-600"
					viewBox="0 0 24 27"
					fill="none"
				>
					<path
						d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<Carousel
				opts={{
					loop: true,
				}}
				className="max-w-4xl mx-auto"
			>
				<CarouselContent className="flex-row-reverse">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							onMouseEnter={() => setPointerInside(true)}
							onMouseLeave={() => setPointerInside(false)}
							key={index}
							className="cursor-grab"
						>
							<div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
								<figure className="max-w-screen-md mx-auto">
									<blockquote className="mt-6 border-r-2 pr-6 text-secondary text-lg">
										اجد أن مؤسسة الامام زين العابدين (ع)
										تسهم بشكل فعال في الحفاظ على التراث
										العلمي والثقافي للامام السجاد. تقدم
										المؤسسة منهجا علميا متقدما يجمع بين
										البحث الاكاديمي الرصين والموارد
										التعليمية الغنية. وقد اقرت فعالياتها في
										توسيع افقي البحثي وزيادة فهمي لاعماق
										العلوم بالامام السجاد. انا ممتن للمؤسسة
										لجعلها منصة علمية تشجع على الابتكار
										والاكتشاف، واتطلع لقراءة اصدارتهم
										المستقبلية
									</blockquote>
									<figcaption className="flex items-center justify-center mt-6 gap-3">
										<Avatar className="h-16 w-auto">
											<AvatarImage src="/images/avatars/1.png" />
											<AvatarFallback>
												الشيخ عبد المهدي
											</AvatarFallback>
										</Avatar>
										<div className="flex flex-col">
											<div className="leading-7 text-start">
												الشيخ عبد المهدي
											</div>
											<div className="text-gray-400">
												المتولي الشرعي للعتبة الحسينية
												المقدسة
											</div>
										</div>
									</figcaption>
								</figure>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious
					ref={carouselPreviousRef}
					className="hidden"
				/>
			</Carousel>
		</>
	)
}
