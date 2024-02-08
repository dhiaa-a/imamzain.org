"use client"

import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import Socials from "./ui/socials"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { LanguagesIcon, PhoneIcon, SearchIcon } from "./icons"

const links = [
	{ href: "/imamzain", text: "الامام زين العابدين" },
	{ href: "/library", text: "المكتبة التخصصية" },
	{ href: "/", text: "الرئيسية", isMain: true },
	{ href: "/publications", text: "الإصدارات" },
	{ href: "/activities", text: "الانشطة" },
	{ href: "/about", text: "حول المؤسسة" },
]

export default function Header() {
	const [activeTab, setActiveTab] = useState<string | false>(false)
	const pathname = usePathname()
	return (
		<>
			<div className="w-full p-4 bg-white z-50">
				<div className="flex justify-around items-center">
					<div className="flex flex-col gap-4 items-center flex-none w-1/3 justify-center">
						<div className="flex gap-4 items-center">
							<p dir="ltr" className="">
								+964 782 943 9996
							</p>
							<PhoneIcon />
						</div>
						<Socials />
					</div>
					<div className="flex w-1/3 justify-center">
						<Image
							src="/logo.png"
							width={400}
							height={400}
							className="w-auto h-32"
							alt="Logo"
						/>
					</div>
					<div className="flex justify-center gap-4 items-center w-1/3 sticky">
						<SearchIcon className="duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer" />
						<Separator
							orientation="vertical"
							className="h-8 bg-slate-500"
						/>
						<LanguagesIcon className="duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer" />
					</div>
				</div>
			</div>
			<div className="flex sticky z-50 top-0 justify-center items-center gap-10 bg-white p-6 shadow-mdhover:text-secondary border-b-2 border-b-primary-500">
				{links.map((link, index) => (
					<Link
						key={index}
						className={clsx(
							"hover:text-secondary-400 duration-300 relative px-2 py-1",
							{
								"text-primary": pathname === link.href,
								"text-3xl": link.isMain,
							},
						)}
						href={link.href}
					>
						{link.text}
					</Link>
				))}
			</div>
			{activeTab && (
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab ? activeTab : "empty"}
						initial={{ height: 0 }}
						animate={{ height: 300 }}
						exit={{ height: 0 }}
						className="flex shadow-xl"
					></motion.div>
				</AnimatePresence>
			)}
		</>
	)
}
