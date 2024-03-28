"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"
import { LanguagesIcon, PhoneIcon, SearchIcon } from "./icons"
import Socials from "./ui/socials"
import { Separator } from "@/components/ui/separator"

const links: { href: string; label: string; content: JSX.Element }[] = [
	{
		href: "/imamzain",
		label: "الامام زين العابدين",
		content: <div>hello</div>,
	},
	{ href: "/library", label: "المكتبة التخصصية", content: <div>hello</div> },
	{ href: "/", label: "الرئيسية", content: <div>hello</div> },
	{ href: "/publications", label: "الإصدارات", content: <div>hello</div> },
	{ href: "/activities", label: "الانشطة", content: <div>hello</div> },
	{ href: "/about", label: "حول المؤسسة", content: <div>hello</div> },
]

type HeaderState = {
	open: boolean
	initiator: string | null
	viewContent: string | null
}

export default function Header() {
	const [headerState, setHeaderState] = useState<HeaderState>({
		open: false,
		initiator: null,
		viewContent: null,
	})
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
			<div className="flex group flex-col sticky z-50 top-0 bg-white shadow-md ">
				<div className="flex items-center justify-center gap-10 p-6 hover:text-secondary">
					{links.map((link, index) => (
						<Link
							key={index}
							onMouseEnter={() =>
								!headerState.open &&
								setHeaderState({
									open: true,
									initiator: link.label,
									viewContent: link.label,
								})
							}
							className={clsx(
								"hover:text-secondary-400 duration-300 px-2 py-1",
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
				{headerState.open && (
					<AnimatePresence mode="wait">
						<motion.div
							onMouseLeave={() =>
								setHeaderState({
									open: false,
									initiator: null,
									viewContent: null,
								})
							}
							key={headerState.initiator ?? "empty"}
							initial={{ height: 0 }}
							animate={{ height: 300 }}
							exit={{ height: 0 }}
							className="w-full absolute overflow-hidden flex items-center justify-center"
						>
							{/* Content for mega menu */}
							<div>Menu Content</div>
						</motion.div>
					</AnimatePresence>
				)}
			</div>
		</>
	)
}
