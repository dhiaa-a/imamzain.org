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

export default function ComingSoon() {
	return (
		<div className="h-screen w-screen bg-[url(/images/coming-soon.jpg)] bg-cover">
			<div className="h-screen justify-between p-12 w-screen bg-black bg-opacity-50 flex flex-col">
				<Image
					className="w-56"
					src="/logo.png"
					alt="logo"
					width={200}
					height={200}
				/>
				<div className="text-center">
					<h1 className="text-7xl text-white mb-10">
						الموقع تحت الانشاء
					</h1>
					<p className="text-1xl text-white my-8">
						تعمل مؤسستنا حاليا على تجهيز الموقع الرسمي
					</p>
					<p className="text-1xl text-white my-8">
						والذي سيمكن من خلاله تصفح جميع اخبار ونتاجات المؤسسة
					</p>
				</div>
				<div className="items-end justify-end text-center">
					<p className="text-md text-slate-300 my-4">
						الموقع من تصميم مؤسسة الإمام زين العابدين، جميع الحقوق
						محفوظة
					</p>
					<div className="flex justify-center gap-8 text-slate-300">
						<Link
							href="https://twitter.com/imamzainorg"
							className="rounded-full border-[1px] p-2 border-white"
						>
							<TwitterIcon
								strokeWidth={0.5}
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://whatsapp.com/channel/0029VaKdHsJFCCocmkLhJA3L"
							className="rounded-full border-[1px] p-2 border-white"
						>
							<WhatsAppIcon
								strokeWidth={0.5}
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://maps.app.goo.gl/YKYckk1jPpJ9BVaX6"
							className="rounded-full border-[1px] p-2 border-white"
						>
							<LocationIcon
								color="white"
								strokeWidth={0.5}
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://www.facebook.com/@imamzainorg"
							className="rounded-full border-[1px] p-2 border-white"
						>
							<FacebookIcon
								color="white"
								strokeWidth={0.5}
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="mailto:dev@imamzain.org"
							className="rounded-full border-[1px] p-2 border-white"
						>
							<GmailIcon
								color="white"
								strokeWidth={0.5}
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://www.tiktok.com/@imamzainorg"
							className="rounded-full border-[1px] p-2 border-white"
						>
							<TikTokIcon
								color="white"
								strokeWidth={0.5}
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://youtube.com/@imamzainorg"
							className="rounded-full border-[1px] p-2 border-white"
						>
							<YoutubeIcon
								color="white"
								strokeWidth={0.5}
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://www.instagram.com/imamzainorg/"
							className="rounded-full border-[1px] p-2 border-white"
						>
							<InstagramIcon
								color="white"
								strokeWidth={0.5}
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://telegram.me/imamzainorg"
							className="rounded-full border-[1px] p-2 border-white"
						>
							<TelegramIcon
								color="white"
								strokeWidth={0.5}
								width={20}
								height={20}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
