import {
	FacebookIcon,
	EmailIcon,
	InstagramIcon,
	LocationIcon,
	TelegramIcon,
	TikTokIcon,
	XIcon,
	WhatsAppIcon,
	YoutubeIcon,
} from "@/components/icons"
import Image from "next/image"

import Link from "next/link"

export default function ComingSoon() {
	return (
		<div className="overflow-x-hidden">
			<div className="h-screen w-screen bg-[url(/images/coming-soon.jpg)] bg-cover bg-center">
				<div className="h-screen justify-between p-4 sm:pb-8 w-screen bg-gradient-to-b from-transparent to-primary-800 bg-opacity-30 flex flex-col">
					<div className="w-full flex justify-center sm:justify-center">
						<Image
							className="w-80 p-2 drop-shadow-xl shadow-white"
							src="/logo.png"
							alt="logo"
							width={300}
							height={300}
						/>
					</div>
					<div className="text-center space-y-0">
						<h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-200 my-5 sm:my-10 md:my-12 lg:my-15 opacity-0 animate-fade-in-up duration-300">
							الموقع تحت الانشاء
						</h1>
						<p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-200 font-extralight my-8 opacity-0 animate-fade-in-up duration-300 delay-300">
							تعمل مؤسستنا حاليا على تجهيز الموقع الرسمي
						</p>
						<p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-200 font-extralight my-12 opacity-0 animate-fade-in-up duration-500 delay-300">
							والذي سيمكن من خلاله تصفح جميع اخبار ونتاجات المؤسسة
						</p>
					</div>
					<div className="text-center text-sm md:text-base lg:text-lg space-y-5 text-slate-200 opacity-0 animate-fade-in delay-700 duration-500">
						<p className="">يمكنكم الاتصال بنا على رقم الهاتف</p>
						<p dir="ltr" className="">
							(+964) 778 294 3996
						</p>
					</div>
					<div className="items-end justify-end text-center opacity-0 animate-pop-in duration-150 delay-1000">
						<div className="flex flex-wrap justify-center items-center gap-2 md:gap-8 lg:gap-10">
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
						<p className="text-xs sm:text-sm md:text-base lg:base-xl text-slate-400 my-4">
							الموقع تصميم وتنفيذ مؤسسة الإمام زين العابدين، جميع
							الحقوق محفوظة
						</p>
					</div>
				</div>
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
			<EmailIcon color="white" strokeWidth={0.5} width={20} height={20} />
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
		icon: <XIcon strokeWidth={0.5} width={20} height={20} />,
	},
]
