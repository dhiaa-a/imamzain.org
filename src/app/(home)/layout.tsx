import type { Metadata } from "next"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Link from "next/link"
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
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export const metadata: Metadata = {
	title: "مؤسسة الامام زين العابدين",
	description:
		" استكشف رسالة وأهداف مؤسستنا الرائدة في البحث والدراسات حول الإمام زين العابدين. اقرأ أحاديثه اليومية وتصفح آخر الإصدارات والأخبار. كل شيء حول الامام السجاد",
}

const socials: { href: string; icon: JSX.Element }[] = [
	{
		href: "https://www.instagram.com/imamzainorg/",
		icon: <InstagramIcon fill="#cd486b" />,
	},

	{
		href: "https://www.tiktok.com/@imamzainorg",
		icon: <TikTokIcon stroke="#ff0050" />,
	},

	{
		href: "https://www.facebook.com/@imamzainorg",
		icon: <FacebookIcon fill="#1877F2" />,
	},
	{
		href: "https://twitter.com/imamzainorg",
		icon: <XIcon fill="#000000" />,
	},

	{
		href: "https://whatsapp.com/channel/0029VaKdHsJFCCocmkLhJA3L",
		icon: <WhatsAppIcon fill="#075e54" />,
	},
	{
		href: "https://telegram.me/imamzainorg",
		icon: <TelegramIcon fill="#0088cc" />,
	},
	{
		href: "https://youtube.com/@imamzainorg",
		icon: <YoutubeIcon fill="#CD201F" />,
	},
	{
		href: "mailto:dev@imamzain.org",
		icon: <EmailIcon fill="#000000" />,
	},
	{
		href: "https://maps.app.goo.gl/YKYckk1jPpJ9BVaX6",
		icon: <LocationIcon fill="#FF0000" />,
	},
]

const SideSocials = () => {
	return (
		<div className="invisible xl:visible fixed bottom-1/4 left-5 flex flex-col items-center gap-2">
			{socials.map((item, index) => (
				<Link
					key={index}
					target="_blank"
					href={item.href}
					className="group flex items-center gap-2 primary active:scale-50 hover:scale-90 duration-300 "
				>
					<div className="p-2 border-b-[1px] border-transparent group-hover:border-primary-400 duration-300">
						{item.icon}
					</div>
				</Link>
			))}
		</div>
	)
}

const SideNavDots = () => {
	return (
		<div className="invisible xl:visible fixed bottom-1/3 right-5 flex flex-col items-center">
			{Array.from({ length: 5 }).map((_, index) => (
				<div key={index} className="p-4 cursor-pointer group">
					<div
						className={`${
							index === 3
								? "border-primary-500"
								: "border-slate-300"
						} rounded-full w-3 h-3 border-2 duration-300`}
					/>
				</div>
			))}
		</div>
	)
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			{children}
			{/* socials */}
			<SideNavDots />
			<SideSocials />
			<Footer />
		</>
	)
}
