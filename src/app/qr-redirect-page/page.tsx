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
import { ChevronDownIcon } from "@radix-ui/react-icons"
import Image from "next/image"

import Link from "next/link"

export default function ComingSoon() {
	return (
		<div className="overflow-x-hidden">
			<div className="h-screen w-screen bg-[url(/images/coming-soon.jpg)] bg-cover bg-center">
				<div className="h-screen justify-between p-4 sm:pb-8 w-screen bg-gradient-to-t from-transparent to-white flex flex-col">
					<div className="w-full flex justify-center sm:justify-center">
						<Image
							className="w-auto p-2"
							src="/logo.png"
							alt="logo"
							width={240}
							height={240}
						/>
					</div>
					<div className="shadow-[0_25px_25px_-15px_rgba(45, 116, 110, 1)] text-primary px-10 py-5 max-w-6xl mx-auto rounded-xl bg-opacity-40 space-y-10">
						<div className="text-center space-y-0">
							<h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-800 my-5 sm:my-10 md:my-12 lg:my-15 opacity-0 animate-fade-in-up duration-300">
								مؤسسة الامام زين العابدين
							</h1>
							<p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-800 font-extralight my-8 opacity-0 animate-fade-in-up duration-300 delay-300">
								مؤسسة دينية تهدف الى تسليط الضوء على ما لم يظهر
								من اثار الإمام السجاد عليه السلام، وبلورة صياغة
								جديدة وطرح رؤية فكرية شاملة فيما قد مضى العمل
								عليه مسبقاً، لجعل المؤسسة حاضرة في الأوساط
								العلمية والنخبوية
							</p>
						</div>
						<div className="text-center text-sm md:text-base lg:text-lg space-y-5 text-slate-800 opacity-0 animate-fade-in delay-700 duration-500">
							<p className="font-bold">
								يمكنكم الاتصال بنا على رقم الهاتف
							</p>
							<p dir="ltr" className="font-bold">
								(+964) 778 294 3996
							</p>
						</div>

						<div className="w-full flex justify-center">
							<Link
								href="/"
								className="px-4 py-2 rounded-md border-2 border-white bg-transparent text-white text-sm hover:shadow-lg shadow-slate-50 hover:animate-float"
							>
								الذهاب الى الموقع
							</Link>
						</div>
						<div className="items-end justify-end text-center opacity-0 animate-pop-in duration-150 delay-1000">
							<div className="flex flex-wrap justify-center items-center gap-2 md:gap-8 lg:gap-10">
								{socials.map((item, index) => (
									<Link
										key={index}
										target="_blank"
										href={item.href}
										className="rounded-full border p-3 border-white scale-75 md:scale-90 active:scale-50 hover:scale-90 duration-300 hover:border-spacing-16"
									>
										{item.icon}
									</Link>
								))}
							</div>
						</div>

						<div className="w-full flex justify-center">
							<a
								href="#al-siraj"
								className="group px-4 flex flex-col gap-2 items-center text-white  hover:shadow-lg shadow-slate-50 transition duration-240"
							>
								<span className="">المجلة</span>
								<ChevronDownIcon className="group-hover:translate-y-3 duration-300" />
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* magazine */}
			<div
				id="al-siraj"
				className="h-screen justify-between p-4 sm:pb-8 w-screen bg-gradient-to-t from-transparent to-white bg-opacity-30 flex flex-col"
			>
				<div className="grid lg:grid-cols-2 max-w-7xl w-1/2 mx-auto my-auto">
					<div className="w-full flex justify-center sm:justify-start">
						<Image
							className="h-auto w-auto p-2"
							src="/al-siraj.png"
							alt="logo"
							width={500}
							height={500}
						/>
					</div>
					<div className="text-right max-lg:text-center space-y-0">
						<h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-800 my-5 sm:my-10 md:my-12 lg:my-15 opacity-0 animate-fade-in-up duration-300">
							مجلة السراج
						</h1>
						<p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-800 font-extralight my-8 opacity-0 animate-fade-in-up duration-300 delay-300">
							المجلة تمثل بوابة لاكتشاف عوالم جديدة والتعرف على
							رحلة المؤسسة الدينية في استكشاف الإرث الثقافي للإمام
							السجاد عليه السلام. تتجلى رؤية المجلة في تقديم
							تحليلات عميقة ومقالات متخصصة تلقي الضوء على الجوانب
							الروحية والفكرية لتراثه، مما يسعى إلى بناء جسور من
							التواصل والتفاهم بين المؤسسة والجمهور.
						</p>
					</div>
				</div>
				<div className="text-center text-sm md:text-base lg:text-lg space-y-5 text-slate-800 opacity-0 animate-fade-in delay-700 duration-500 my-5">
					<p className="font-bold">
						للتواصل مع قسم المجلة، يمكنكم استخدام جهات الاتصال ادناه
					</p>
					<p dir="ltr" className="font-bold">
						(+964) 778 294 3996
					</p>
				</div>
				<div className="items-end justify-end text-center opacity-0 animate-pop-in duration-150 delay-1000 my-5">
					<div className="flex flex-wrap justify-center items-center gap-2 md:gap-8 lg:gap-10">
						{magazineSocials.map((item, index) => (
							<Link
								key={index}
								target="_blank"
								href={item.href}
								className="rounded-full border-[1px] p-2 border-blue-800 scale-75 md:scale-90 active:scale-50 hover:scale-90 duration-300 hover:border-spacing-16"
							>
								{item.icon}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const magazineSocials: { href: string; icon: JSX.Element }[] = [
	{
		href: "https://telegram.me/imamzainorg",
		icon: (
			<TelegramIcon
				color="black"
				fill="#1E40AF"
				strokeWidth={0.5}
				width={24}
				height={24}
			/>
		),
	},

	{
		href: "https://whatsapp.com/channel/0029VaKdHsJFCCocmkLhJA3L",
		icon: (
			<WhatsAppIcon
				fill="#1E40AF"
				strokeWidth={0.5}
				width={24}
				height={24}
			/>
		),
	},
]

const socials: { href: string; icon: JSX.Element }[] = [
	{
		href: "https://telegram.me/imamzainorg",
		icon: (
			<TelegramIcon
				color="white"
				strokeWidth={0.5}
				width={24}
				height={24}
			/>
		),
	},
	{
		href: "https://www.instagram.com/imamzainorg/",
		icon: (
			<InstagramIcon
				color="white"
				strokeWidth={0.5}
				width={24}
				height={24}
			/>
		),
	},
	{
		href: "https://youtube.com/@imamzainorg",
		icon: (
			<YoutubeIcon
				color="white"
				strokeWidth={0.5}
				width={24}
				height={24}
			/>
		),
	},
	{
		href: "https://www.tiktok.com/@imamzainorg",
		icon: (
			<TikTokIcon
				color="white"
				strokeWidth={0.5}
				width={24}
				height={24}
			/>
		),
	},
	{
		href: "mailto:dev@imamzain.org",
		icon: (
			<EmailIcon color="white" strokeWidth={0.5} width={24} height={24} />
		),
	},
	{
		href: "https://www.facebook.com/@imamzainorg",
		icon: (
			<FacebookIcon
				color="white"
				strokeWidth={0.5}
				width={24}
				height={24}
			/>
		),
	},
	{
		href: "https://maps.app.goo.gl/YKYckk1jPpJ9BVaX6",
		icon: (
			<LocationIcon
				color="white"
				strokeWidth={0.5}
				width={24}
				height={24}
			/>
		),
	},
	{
		href: "https://whatsapp.com/channel/0029VaKdHsJFCCocmkLhJA3L",
		icon: <WhatsAppIcon strokeWidth={0.5} width={24} height={24} />,
	},
	{
		href: "https://twitter.com/imamzainorg",
		icon: <XIcon strokeWidth={0.5} width={24} height={24} />,
	},
]
