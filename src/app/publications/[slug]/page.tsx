"use client"

import Image from "next/image"
import { useState } from "react"

import { books } from "@/app/lib/data"

import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { ShareIcon } from "@/components/icons"
import clsx from "clsx"

export default function Page({ params }: { params: { slug: string } }) {
	const [activePage, setActivePage] = useState(1)
	const book = books.filter(
		(book) => book.title.replace(" ", "-") === params.slug,
	)[0]
	return (
		// page container
		<div className="flex justify-center items-center my-40">
			{/* book info container */}
			<div className="flex flex-col justify-center max-w-screen-2xl w-full gap-20 rounded-lg bg-gray-50 px-8 pb-10 pt-8 shadow-md">
				{/* image and main info container */}
				<div className="-mt-60 flex w-full items-center">
					{/* image container */}
					<div className="overflow-hidden w-1/2 drop-shadow-sm flex md:justify-center">
						<Image
							width={600}
							height={600}
							className="w-[20rem] object-cover rounded-xl border-opacity-45  border-2 border-gray-200 "
							src={book.imageSrc}
							alt="Book cover"
						/>
					</div>
					<div className="w-1/2 flex flex-col gap-20">
						<div>
							<h1 className="text-3xl font-bold mb-4">
								{book.title}
							</h1>
							<p className="text-gray-400">{book.author}</p>
						</div>
						<div className="pb-4 w-full border-b-2 border-slate-300 flex justify-between">
							<Button
								variant={"default"}
								className="bg-primary text-md p-5 rounded-full flex gap-4 items-center"
							>
								<p>ابدأ بالقراءة</p>
								<ArrowLeftIcon />
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
				<div className="w-3/4 mx-auto flex justify-around pb-5 border-b-2 border-slate-300">
					<div className="">
						<ul>
							<li>
								<p className="text-2xl font-semibold my-2">
									المحررين
								</p>
								<ul className="list-disc mr-10 text-md">
									<li>
										العلامة الشيخ محمد باقر المجسلي - المؤلف
									</li>
									<li>السيد مهدي الرحابي - محقق</li>
								</ul>
							</li>
							<li>
								<p className="text-2xl font-semibold my-2">
									اللغة
								</p>
								<ul className="list-disc mr-10 text-md">
									<li>اللغة العربية</li>
									<li>اللغة الفارسية</li>
								</ul>
							</li>
							<li>
								<p className="text-2xl font-semibold my-2">
									تفاصيل الكتاب
								</p>
								<ul className="list-disc mr-10 text-md">
									<li>نوع الورق: ورق محكم</li>
									<li>التلوين: ملون</li>
									<li>عدد الصفحات: 250 صفحة</li>
									<li>
										رقم ال <span>ISBN</span>:{" "}
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="w-1/2">
						<h2 className="text-2xl font-semibold">الوصف</h2>
						<p className="text-gray-600 text-lg text-justify">
							هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
							لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
							للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
							ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
							توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام
							"هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها
							تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح
							النشر المكتبي وبرامح تحرير صفحات الويب لوريم إيبسوم
							بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem
							ipsum" في أي محرك بحث ستبعض العبارات الفكاهية إليها.
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
				<div className="-mb-20 p-4 rounded-full bg-gray-100 shadow-lg w-1/2 mx-auto border-2 border-slate-200 flex justify-around items-center">
					{[...Array.from({ length: 10 })].map((_, index) => (
						<button
							key={index}
							onClick={() => setActivePage(index)}
							className={clsx(
								"rounded-full text-sm p-2 flex border-2 duration-150",
								{
									" border-primary-500": activePage === index,
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
	)
}
