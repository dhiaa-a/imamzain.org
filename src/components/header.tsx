"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import {
	LanguagesIcon,
	Manuscript,
	SearchIcon,
	MenuIcon,
	CloseIcon,
} from "./icons"

const MenuSection = ({
	title,
	children,
}: {
	title: string
	children?: React.ReactNode
}) => (
	<div className="flex flex-col gap-2">
		<h1 className="font-extralight text-2xl mb-2 border-b-[1px] border-slate-400 pb-4 pl-12">
			<Link href="#">{title}</Link>
		</h1>
		{children}
	</div>
)

const MenuItems = ({ items }: { items: string[] }) => (
	<ul className="space-y-6">
		{items.map((item, index) => (
			<li key={index} className="text-slate-800">
				<p className="font-bold inline-flex gap-2 text-md items-center">
					<Manuscript width={16} height={16} />
					{item}
				</p>
			</li>
		))}
	</ul>
)

const ContactSection = () => (
	<div className="flex items-center text-sm justify-center gap-10 border-2 p-3">
		<p>اتصل بنا عبر الرقم 134567890</p>
		<div className="h-4 border-r-2 border-slate-700"></div>
		<Link href="#"> حمل تطبيق الهاتف</Link>
	</div>
)

const PopoverLink = ({ link }: { link: LinkType }) => (
	<Link
		href={link.href}
		className="hover:text-primary-500 hover:drop-shadow-2xl shadow-primary-200 flex flex-col gap-2 justify-center items-center group duration-300"
	>
		{link.menu ? (
			<Popover>
				<PopoverTrigger>{link.label}</PopoverTrigger>
				<PopoverContent className="p-0 mr-10 w-[80vw]">
					{link.menu}
				</PopoverContent>
			</Popover>
		) : (
			link.label
		)}
		<div className="rounded-full w-1 h-1 bg-primary-500 opacity-0 group-hover:opacity-100 duration-300" />
	</Link>
)

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className="fixed w-full top-0 bg-gradient-to-b backdrop-opacity-0 from-neutral-50 to-transparent z-50 flex justify-between px-8 py-4 text-lg font-extralight items-center">
			<div className="flex gap-8 items-center">
				<Link href="/">
					<Image
						src="/logo_no_title.png"
						alt="logo"
						width={100}
						height={100}
						className="w-12"
						priority
					/>
				</Link>
				<div className=" hidden md:flex items-center gap-8 p-2 text-sm lg:text-base">
					{links.map((link) => (
						<PopoverLink key={link.label} link={link} />
					))}
				</div>
			</div>
			<div className="hidden md:flex gap-10 items-center">
				<LanguagesIcon className="cursor-pointer hover:drop-shadow-2xl" />
				<SearchIcon className="cursor-pointer hover:drop-shadow-2xl" />
			</div>
			<div className="md:hidden flex items-center z-20">
				<button
					onMouseEnter={() => setMenuOpen(true)}
					onMouseLeave={() => setMenuOpen(false)}
				>
					{menuOpen ? (
						<CloseIcon className="w-6 h-6" />
					) : (
						<MenuIcon className="w-6 h-6" />
					)}
				</button>
			</div>
			{menuOpen && (
				<div className="fixed inset-0 z-10 bg-white flex flex-col items-center gap-8 p-8 md:hidden">
					{links.map((link) => (
						<PopoverLink key={link.label} link={link} />
					))}
					<div className="flex gap-8 items-center">
						<LanguagesIcon className="cursor-pointer hover:drop-shadow-2xl" />
						<SearchIcon className="cursor-pointer hover:drop-shadow-2xl" />
					</div>
				</div>
			)}
		</div>
	)
}

type LinkType = {
	href: string
	label: string
	menu?: JSX.Element
}

const links: LinkType[] = [
	{
		href: "/imamzain",
		label: "الامام زين العابدين",
		menu: (
			<div className="flex shadow-xl bg-white flex-col">
				<div className="flex">
					<div className="flex justify-around w-7/12 p-10">
						<MenuSection title="حياته الكريمة" />
						<MenuSection title="اثاره المباركة">
							<MenuItems
								items={[
									"الصحيفة السجادية",
									"الصحيفة الكاملة",
									"ما الحقه الشيخ الحر العاملي",
									"ما الحقه الميرزا عبد الله افندي",
									"ما الحقه الميرزا حسين النوري",
									"ما الحقه السيد محسن الامين العاملي",
									"معجم الفاظ الصحيفة",
									"المعجم الموضوعي لالفاظ الصحيفة",
								]}
							/>
						</MenuSection>
						<MenuSection title="صور">
							<MenuItems
								items={[
									"البقيع",
									"رسومات تعبيرية",
									"مساهمات اخرى",
								]}
							/>
						</MenuSection>
						<MenuSection title="الامام في الادب">
							<MenuItems
								items={[
									"تراثه في اللغة العربية",
									"تراثه في ادب اللغات الاخرى",
								]}
							/>
						</MenuSection>
					</div>
					<div className="flex w-5/12 border-r-2 bg-slate-100"></div>
				</div>
				<ContactSection />
			</div>
		),
	},
	{ href: "/activities", label: "الانشطة" },
	{ href: "/publications", label: "الإصدارات" },
	{ href: "/library", label: "المكتبة " },
	{ href: "/about", label: "حول المؤسسة" },
]
