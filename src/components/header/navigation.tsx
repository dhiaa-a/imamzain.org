"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/utils/utils"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Socials from "../ui/socials"
import { LanguagesIcon, Manuscript } from "../icons"

const NavigationItems: { href: string; label: string; content: JSX.Element }[] =
	[
		{
			href: "/imamzain",
			label: "الامام زين العابدين",
			content: (
				<div>
					<h3>حياته الشريفة</h3>
					<h3>اثاره المباركة</h3>
					<h3>صور</h3>
					<h3>صور الامام في الادب</h3>
				</div>
			),
		},
		{
			href: "/library",
			label: "المكتبة التخصصية",
			content: <div>hello</div>,
		},
		{ href: "/", label: "الرئيسية", content: <div>hello</div> },
		{
			href: "/publications",
			label: "الإصدارات",
			content: <div>hello</div>,
		},
		{ href: "/activities", label: "الانشطة", content: <div>hello</div> },
		{ href: "/about", label: "حول المؤسسة", content: <div>hello</div> },
	]

export default function Navigation() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink>Home</NavigationMenuLink>
						</Link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavMenuContent />
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"

const NavMenuContent = () => (
	<div className="flex shadow-xl bg-white flex-col">
		<div className="flex">
			<div className="flex justify-around w-7/12 p-10">
				<div className="flex flex-col gap-2">
					<h1 className="font-extralight text-2xl border-b-[1px] border-transparent pb-4 mb-2 pl-12">
						<Link href="#">حياته الكريمة</Link>
					</h1>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="font-extralight text-2xl mb-2 border-b-[1px] border-slate-400 pb-4 pl-12">
						اثاره المباركة
					</h1>
					<ul className="space-y-6">
						<li className="text-slate-800">
							<p className="font-bold inline-flex gap-2 text-md items-center">
								<Manuscript width={16} height={16} />
								الصحيفة السجادية
							</p>
							<ul className="text-sm space-y-2 text-slate-700 mr-8">
								<li>
									<Link href="#">الصحيفة الكاملة</Link>
								</li>
								<li>
									<Link href="#">
										ما الحقه الشيخ الحر العاملي
									</Link>
								</li>
								<li>
									<Link href="#">
										ما الحقه الميرزا عبد الله افندي
									</Link>
								</li>
								<li>
									<Link href="#">
										ما الحقه الميرزا حسين النوري
									</Link>
								</li>
								<li>
									<Link href="#">
										ما الحقه السيد محسن الامين العاملي
									</Link>
								</li>
								<li>
									<Link href="#">معجم الفاظ الصحيفة</Link>
								</li>
								<li>
									<Link href="#">
										المعجم الموضوعي لالفاظ الصحيفة
									</Link>
								</li>
							</ul>
						</li>
						<li className="">
							<Link href="#">() رسالة الحقوق</Link>
						</li>
						<li className="">
							<Link href="#">() ارثه الرائي</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<h1 className="font-extralight text-2xl mb-2 border-b-[1px] border-slate-400 pb-4 pl-12">
							<Link href="#">صور</Link>
						</h1>
						<ul className="space-y-4 text-sm font-">
							<li>
								<Link href="#">البقيع</Link>
							</li>
							<li>
								<Link href="#">رسومات تعبيرية</Link>
							</li>
							<li>
								<Link href="#">مساهمات اخرى</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-extralight text-2xl mb-2 border-b-[1px] border-slate-400 pb-4 pl-12">
							<Link href="#">الامام في الادب</Link>
						</h1>
						<ul className="space-y-6">
							<li>
								<Link href="#">
									<p className="font-bold inline-flex gap-2 text-sm items-center">
										<span className="border-[1px] rounded-sm size-4 text-xs text-center text-slate-800 p-2">
											Ar
										</span>
										تراثه في اللغة العربية
									</p>
								</Link>
							</li>
							<li>
								<Link href="#">
									<p className="font-bold inline-flex gap-2 text-sm items-center">
										<LanguagesIcon width={24} height={24} />
										تراثه في ادب اللغات الاخرى
									</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex w-5/12 border-r-2 bg-slate-100"></div>
		</div>
		<div className="flex items-center text-sm justify-center gap-10 border-2  p-3">
			<p>اتصل بنا عبر الرقم 134567890</p>
			<div className="h-4 border-r-2 border-slate-700"></div>
			<Link href="#"> حمل تطبيق الهاتف</Link>
			<div className="h-4 border-r-2 border-slate-700"></div>
			<Socials />
		</div>
	</div>
)
