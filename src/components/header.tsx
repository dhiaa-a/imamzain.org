"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { LanguagesIcon, PhoneIcon, SearchIcon } from "./icons"
import Socials from "./ui/socials"
import { Separator } from "@/components/ui/separator"

const links: { href: string; label: string }[] = [
	{
		href: "/imamzain",
		label: "الامام زين العابدين",
	},
	{ href: "/library", label: "المكتبة التخصصية" },
	{ href: "/", label: "الرئيسية" },
	{ href: "/publications", label: "الإصدارات" },
	{ href: "/activities", label: "الانشطة" },
	{ href: "/about", label: "حول المؤسسة" },
]

export default function Header() {
	const pathname = usePathname()

	return (
		<>
			<div className="w-full p-4 bg-white z-50">
				<div className="flex justify-around items-center flex-wrap">
					<div className="flex flex-col gap-4 items-center flex-none w-full md:w-1/3 justify-center mb-4 md:mb-0">
						<div className="flex gap-4 items-center">
							<p dir="ltr" className="">
								+964 782 943 9996
							</p>
							<PhoneIcon />
						</div>
						<Socials />
					</div>
					<div className="flex w-full md:w-1/3 justify-center">
						<Image
							src="/logo.png"
							width={400}
							height={400}
							className="w-auto h-32"
							alt="Logo"
						/>
					</div>
					<div className="flex justify-center gap-4 items-center w-full md:w-1/3 sticky">
						<SearchIcon className="duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer" />
						<Separator
							orientation="vertical"
							className="h-8 bg-slate-500"
						/>
						<LanguagesIcon className="duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer" />
					</div>
				</div>
			</div>
			<div className="flex group flex-col sticky z-50 top-0 bg-white shadow-md">
				<div className="flex items-center justify-center gap-10 p-6 hover:text-secondary">
					{links.map((link, index) => (
						<Link
							key={index}
							className={clsx(
								"hover:text-secondary-400 duration-300 px-2 py-1 lg",
								{
									"text-primary text-2xl":
										pathname === link.href,
									"text-3xl": pathname == link.href,
								},
							)}
							href={link.href}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</>
	)
}
