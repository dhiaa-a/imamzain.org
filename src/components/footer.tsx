import Image from "next/image"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Socials from "./ui/socials"
import Link from "next/link"
import { LanguagesIcon, SendIcon } from "./icons"

export default function Footer() {
	return (
		<div className="flex flex-col items-center justify-around gap-10 p-6 m-auto bg-slate-50 border-t-[1px] border-green-700 border-opacity-40">
			<div className="flex gap-36 items-center">
				<Image
					src="/logo.png"
					height={400}
					width={400}
					className="w-auto h-36"
					alt="logo"
				/>
				<div className="flex flex-col gap-4 items-center">
					<p className="text-xl font-semibold">
						اشترك بالنشرة الاخبارية
					</p>
					<p className="text-sm text-slate-400">
						احصل على آخر التحديثات والاخبار عبر بريدك الالكتروني
					</p>
					<div className="flex group duration-300">
						<Input
							type="email"
							placeholder="ادخل بريدك الالكتروني"
							className="rounded-none rounded-r-2xl group-hover:border-green-700"
						/>
						<Button
							variant={"outline"}
							size={"icon"}
							className="rounded-none rounded-l-2xl bg-transparent group-hover:border-green-700"
						>
							<SendIcon className="" />
						</Button>
					</div>
				</div>
			</div>
			<div className="flex gap-8 items-center text-sm text-slate-500">
				<Link href="#">الصفحة الرئيسية</Link>
				<Link href="#">الامام زين العابدين(ع)</Link>
				<Link href="#">انشطتنا</Link>
				<Link href="#">اصداراتنا</Link>
				<Link href="#">المكتبة التخصصية</Link>
				<Link href="#">رابطة الامام زين العابدين (ع)</Link>
				<Link href="#">حول المؤسسة</Link>
			</div>
			<Separator className="bg-slate-300 w-5/6" />
			<div className="flex justify-center w-full">
				<div className="w-1/3 ">
					<Socials />
				</div>
				<div className="flex gap-2 items-center justify-center w-1/3 ">
					<Link
						href="#"
						className="font-light text-sm text-slate-400 hover:text-green-700 duration-300"
					>
						خريطة الموقع
					</Link>
					<div className="h-1 w-1 rounded-full bg-slate-300" />
					<Link
						href="#"
						className="font-light text-sm text-slate-400 hover:text-green-700 duration-300"
					>
						حقوق النشر
					</Link>
					<div className="h-1 w-1 rounded-full bg-slate-300" />
					<Link
						href="#"
						className="font-light text-sm text-slate-400 hover:text-green-700 duration-300"
					>
						مواقع ذات صلة
					</Link>
				</div>
				<div className="flex justify-center w-1/3 ">
					<div className="p-1 duration-300 hover:cursor-pointer border-2 border-transparent hover:border-slate-500 rounded-xl">
						<LanguagesIcon />
					</div>
				</div>
			</div>
		</div>
	)
}
