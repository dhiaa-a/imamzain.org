import Link from "next/link"
import LatestNews from "./_components/LatestContainer"
import { blogPosts } from "@/lib/data"

export default function Activities() {
	return (
		<main className="max-w-screen-2xl mx-auto my-10">
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
		</main>
	)
}
