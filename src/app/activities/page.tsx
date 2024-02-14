"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const categories = ["كل الاخبار", "المؤتمرات", "الندوات", "مدونات"]

export default function Activities() {
	const [selectedTab, setSelectedTab] = useState(categories[0])

	return (
		<main className="max-w-screen-2xl mx-auto my-10">
			{/* top news */}
			<h1 className="text-center text-3xl font-bold my-6">آخر الاخبار</h1>
			<section className="max-w-7xl mx-auto flex justify-center items-center gap-10 my-10">
				<Link
					href={"#"}
					className="h-full rounded-xl shadow-md flex border-[1px] gap-8 hover:border-primary-300 hover:-translate-y-0.5 hover:shadow-xl duration-300"
				>
					<Image
						width={400}
						height={400}
						className="w-1/2 rounded-r-xl bg-cover"
						src="/images/activities/activity.png"
						alt="a"
					/>
					<div className="flex flex-col w-1/2 justify-between px-4 py-8">
						<div>
							<h2 className="text-2xl font-bold my-2">
								خبر جديد
							</h2>
							<p className="text-slate-400 text-sm my-4">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. A magnam ipsa nulla impedit
								pariatur labore officiis minus accusantium,
								similique aut? Modi distinctio necessitatibus
								eveniet eaque! Eum, et! Placeat, atque cum?
							</p>
						</div>
						<div className="flex justify-between">
							<span>تاريخ</span>
							<Badge className="bg-slate-100 rounded-xl text-primary">
								صنف
							</Badge>
						</div>
					</div>
				</Link>
			</section>
			{/* https://mailto:dev@imamzain.org */}
			{/* news section */}
			<section className="max-w-7xl mx-auto flex flex-col items-center gap-10 my-20">
				{/* tabs */}
				<div className="flex gap-10">
					{categories.map((category) => (
						<button
							key={category}
							className={cn(
								"px-4 py-2 border-[1px] border-transparent  rounded-full duration-300 bg-transparent",
								{
									"bg-primary text-white":
										category === selectedTab,
									"bg-transparent text-black hover:border-primary-300":
										category !== selectedTab,
								},
							)}
							onClick={() => setSelectedTab(category)}
						>
							{category}
						</button>
					))}
				</div>

				{/* news grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={selectedTab ? selectedTab : "empty"}
						initial={{ x: -10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -10, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-10"
					>
						{Array.from({ length: 9 }).map((_, index) => (
							<Link
								key={index}
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
											<dd className="text-sm text-primary">
												ندوات
											</dd>
										</div>
										<div>
											<dt className="sr-only">العنوان</dt>
											<dd className="font-medium my-2">
												أثر الصحيفة السجادية في الفكر
												الاسلامي الحديث
											</dd>
										</div>
										<div>
											<dt className="sr-only">ملخص</dt>
											<dd className="text-xs text-slate-500">
												<p className="line-clamp-2">
													اقامت مؤسسة الامام زين
													العابدين (ع) مؤتمرا بالعنوان
													المذكور واستضافت السيد احمد
													الاشكوري للمشاركة في اللجنة
													التحكيمية
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
						))}
					</motion.div>
				</AnimatePresence>
			</section>
		</main>
	)
}
