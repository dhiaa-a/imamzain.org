import { DoubleArrowDownIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

const mainText =
	"رسالتنا هي إحياء التراث ونشر الوعي حول إمامنا زين العابدين عليه السلام، من خلال البحوث والأنشطة الثقافية والترويج للقيم الشيعية. نعمل على تطوير المحتوى الثقافي والتقني لخدمة الإسلام الشيعي والمساهمة في إثراء الفهم الديني والثقافي."

const Hero = () => {
	return (
		<div className="overflow-hidden relative h-[80vh] scroll-smooth bg-slate-100 flex flex-col items-center justify-center p-5 mx-auto sm:px-28">
			{/* silly divs for aesthetics */}
			<div className="invisible md:visible absolute rounded-full border-[8px] border-secondary -right-52 top-44 w-96 h-96"></div>
			<div className="invisible md:visible absolute rounded-full  bg-primary-400 -left-44 -bottom-32 w-96 h-96"></div>
			<div className="invisible md:visible absolute left-40 top-32">
				<div className="grid grid-cols-7 gap-6">
					{[...Array.from({ length: 63 })].map((_, i) => (
						<div
							key={i}
							className="w-1 h-1 rounded-full bg-primary-400"
						/>
					))}
				</div>
			</div>

			<section className="relative w-full max-w-7xl">
				<div className="grid grid-cols-1 gap-6 lg:gap-14 items-center">
					<div className="max-w-xl mx-auto text-center">
						<p className="max-w-xl text-base tracking-tight text-gray-600">
							{mainText}
						</p>
					</div>
					<div className="order-first">
						<Image
							width={1500}
							height={1500}
							priority
							className="object-cover rounded-3xl object-center w-96 mx-auto bg-transparent"
							alt="hero"
							src="/logo.png"
						/>
					</div>
				</div>
			</section>
			<div className="text-center text-primary lg:mt-12 space-x-4">
				<p className="text-3xl font-bold my-8">
					تعرف على الامام زين العابدين (ع)
				</p>
				<div className="flex gap-12 font-extralight">
					<Link
						href="#"
						className="bg-transparent hover:scale-105 duration-300 sm:text-lg text-xs font-bold py-2.5 px-6 rounded-full inline-flex items-center"
					>
						حياته الشريفة
					</Link>
					<Link
						href="#"
						className="bg-transparent hover:scale-105 duration-300 sm:text-lg text-xs font-bold py-2.5 px-6 rounded-full inline-flex items-center"
					>
						رسالة الحقوق
					</Link>
					<Link
						href="#"
						className="bg-transparent hover:scale-105 duration-300 sm:text-lg text-xs font-bold py-2.5 px-6 rounded-full inline-flex items-center"
					>
						الصحيفة السجادية
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
