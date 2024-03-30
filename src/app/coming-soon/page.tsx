"use client"

import {
	FacebookIcon,
	GmailIcon,
	InstagramIcon,
	LocationIcon,
	TelegramIcon,
	TikTokIcon,
	TwitterIcon,
	WhatsAppIcon,
	YoutubeIcon,
} from "@/components/icons"
import Image from "next/image"

import Link from "next/link"
import { motion } from "framer-motion"

export default function ComingSoon() {
	return (
		<div className="h-screen w-screen bg-[url(/images/coming-soon.jpg)] bg-cover bg-center overflow-x-hidden">
			<div className="h-screen justify-between p-4 sm:pb-8 w-screen bg-black bg-opacity-60 flex flex-col">
				<div className="w-full flex justify-center sm:justify-start">
					<Image
						className="w-56 p-2 sm:w-48"
						src="/logo.png"
						alt="logo"
						width={200}
						height={200}
					/>
				</div>
				<div className="text-center space-y-0">
					<motion.h1
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, delay: 0 }}
						className="text-3xl sm:text-4xl md:text-5xl text-slate-200 my-5 sm:my-10 md:my-12 lg:my-15"
					>
						الموقع تحت الانشاء
					</motion.h1>
					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, delay: 0.5 }}
						className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-300 font-extralight my-8"
					>
						تعمل مؤسستنا حاليا على تجهيز الموقع الرسمي
					</motion.p>
					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, delay: 0.5 }}
						className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-300 font-extralight my-12"
					>
						والذي سيمكن من خلاله تصفح جميع اخبار ونتاجات المؤسسة
					</motion.p>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className="text-center text-sm md:text-base lg:text-lg space-y-5 text-slate-200"
				>
					<p className="">يمكنكم الاتصال بنا على رقم الهاتف </p>
					<p dir="ltr" className="">
						(+964) 778 294 3996
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scaleX: 1.25 }}
					animate={{ opacity: 1, scaleX: 1 }}
					transition={{ delay: 1.5 }}
					className="items-end justify-end text-center"
				>
					<p className="text-xs sm:text-sm md:text-base lg:base-xl text-slate-400 my-4">
						الموقع من تصميم مؤسسة الإمام زين العابدين، جميع الحقوق
						محفوظة
					</p>
					<div className="flex flex-wrap  justify-center items-center gap-2 md:gap-8 lg:gap-10">
						{socials.map((item, index) => (
							<Link
								key={index}
								target="_blank"
								href={item.href}
								className="rounded-full border-[1px] p-2 border-white scale-75 md:scale-90 active:scale-50 hover:scale-90 duration-300 hover:border-spacing-16"
							>
								{item.icon}
							</Link>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	)
}

const socials: { href: string; icon: JSX.Element }[] = [
	{
		href: "https://telegram.me/imamzainorg",
		icon: (
			<TelegramIcon
				color="white"
				strokeWidth={0.5}
				width={20}
				height={20}
			/>
		),
	},
	{
		href: "https://www.instagram.com/imamzainorg/",
		icon: (
			<InstagramIcon
				color="white"
				strokeWidth={0.5}
				width={20}
				height={20}
			/>
		),
	},
	{
		href: "https://youtube.com/@imamzainorg",
		icon: (
			<YoutubeIcon
				color="white"
				strokeWidth={0.5}
				width={20}
				height={20}
			/>
		),
	},
	{
		href: "https://www.tiktok.com/@imamzainorg",
		icon: (
			<TikTokIcon
				color="white"
				strokeWidth={0.5}
				width={20}
				height={20}
			/>
		),
	},
	{
		href: "mailto:dev@imamzain.org",
		icon: (
			<GmailIcon color="white" strokeWidth={0.5} width={20} height={20} />
		),
	},
	{
		href: "https://www.facebook.com/@imamzainorg",
		icon: (
			<FacebookIcon
				color="white"
				strokeWidth={0.5}
				width={20}
				height={20}
			/>
		),
	},
	{
		href: "https://maps.app.goo.gl/YKYckk1jPpJ9BVaX6",
		icon: (
			<LocationIcon
				color="white"
				strokeWidth={0.5}
				width={20}
				height={20}
			/>
		),
	},
	{
		href: "https://whatsapp.com/channel/0029VaKdHsJFCCocmkLhJA3L",
		icon: <WhatsAppIcon strokeWidth={0.5} width={20} height={20} />,
	},
	{
		href: "https://twitter.com/imamzainorg",
		icon: <TwitterIcon strokeWidth={0.5} width={20} height={20} />,
	},
]
