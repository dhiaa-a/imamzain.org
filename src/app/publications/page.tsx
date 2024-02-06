import Image from "next/image"
import { PublicationShowcaseCard } from "../../components/publications"
import { Badge } from "../../components/ui/badge"
import { Input } from "../../components/ui/input"
import Link from "next/link"
import { books } from "@/app/lib/data"

export default function Home() {
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
				<h2 className="text-3xl m-4 font-semibold">
					كل اصدارات المؤسسة
				</h2>

				<div className="max-w-full m-10">
					<div className="flex justify-around">
						<div>
							<Input type="text" placeholder="ابحث" />
						</div>
						
						<div className="flex flex-col md:flex-row gap-5 text-gray-500 text-lg">
					{categories.map((item) => (
						<button
							key={item.label}
							onClick={() => setSelectedCategory(item)}
							className={`cursor-pointer border-b-2 hover:text-primary border-transparent hover:border-primary hover:border-opacity-30 duration-300 p-2 text-center ${
								selectedCategory === item &&
								"border-b-secondary-700 text-secondary-700"
							}`}
						>
							{item.label}
						</button>
					))}
				</div>
				<div>
					<Button
						variant={"ghost"}
						className="text-primary group space-x-4 text-lg -mr-4 hover:bg-transparent duration-300"
					>
						<p className="group-hover:text-secondary duration-300 ease-in-out">
							اعرض المزيد
						</p>
						<ArrowLeftIcon className="text-secondary -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 ease-in-out duration-300" />
					</Button>
				</div>
			</div>
			<AnimatePresence mode="wait">
				<motion.div
					key={selectedCategory ? selectedCategory.label : "empty"}
					initial={{ x: -10, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 10, opacity: 0 }}
					transition={{ duration: 0.2 }}
				>
					{(categories.find(
						(category) => category === selectedCategory,
					)?.books?.length ?? 0) > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							{categories
								.find(
									(category) => category === selectedCategory,
								)
								?.books.map((book) => (
									<PublicationShowcaseCard
										{...book}
										key={book.title}
									/>
								))}
						</div>
					) : (
						<div className="flex justify-center items-center m-16">
							<div className="p-16 text-center border-2 border-dashed rounded-2xl border-slate-400">
								لا توجد كتب في هذا الصنف!
							</div>
						</div>
					)}
				</motion.div>
			</AnimatePresence>
		</div>

						<div>قائمة الى شبكة</div>
					</div>
					<div className="max-w-screen-2xl mx-auto grid gap-10 grid-cols-5 my-8">
						{books.map((book, index) => (
							<Link
								href={`/publications/${book.title.replaceAll(
									" ",
									"-",
								)}`}
								key={index}
								className="flex flex-col shadow-sm rounded-xl hover:-translate-y-2 hover:shadow-xl hover:border-primary-200 duration-300"
							>
								<Image
									src={book.imageSrc}
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
									<p>{book.issue_date}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
