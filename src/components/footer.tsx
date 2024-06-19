import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components//ui/separator"
import Link from "next/link"
import {
	EmailIcon,
	FacebookIcon,
	InstagramIcon,
	LocationIcon,
	PhoneIcon,
	SendIcon,
	TikTokIcon,
	XIcon,
	YoutubeIcon,
} from "./icons"

export default function Footer() {
	return (
		// <div className="flex flex-col items-center gap-10 p-6 mx-auto bg-slate-50 border-t-[1px] border-green-700 border-opacity-40">
		// 	<div className="flex justify-around items-center w-4/5">
		// 		<div className="flex flex-col gap-8 items-center">
		// 			<Image
		// 				src="/logo.png"
		// 				height={400}
		// 				width={400}
		// 				className="w-auto h-36 md:w-36 md:h-auto"
		// 				alt="logo"
		// 			/>
		// 			<div className="flex flex-col gap-4 items-center">
		// 				<p className="text-xl font-semibold">
		// 					اشترك بالنشرة الاخبارية
		// 				</p>
		// 				<p className="text-sm text-slate-400">
		// 					احصل على آخر التحديثات والاخبار عبر بريدك الالكتروني
		// 				</p>
		// 				<div className="flex group duration-300">
		// 					<Input
		// 						type="email"
		// 						name="email"
		// 						autoComplete="yes"
		// 						placeholder="ادخل بريدك الالكتروني"
		// 						className="rounded-none rounded-r-2xl group-hover:border-green-700"
		// 					/>
		// 					<Button
		// 						variant={"outline"}
		// 						size={"icon"}
		// 						className="rounded-none rounded-l-2xl bg-transparent group-hover:border-green-700"
		// 					>
		// 						<SendIcon className="" />
		// 					</Button>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="flex flex-wrap gap-8 items-start justify-center text-base text-slate-800">
		// 			<div className="flex flex-col space-y-2">
		// 				<Link href="#">الامام زين العابدين(ع)</Link>
		// 				<ul className="space-y-3 text-sm text-slate-500">
		// 					<li>
		// 						<Link href={"#"}>حياته الكريمة</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"#"}>اثاره المباركة</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"#"}>صور</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"#"}>الامام في الادب</Link>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="flex flex-col space-y-2">
		// 				<Link href="#">الانشطة</Link>
		// 				<ul className="space-y-3 text-sm text-slate-500">
		// 					<li>
		// 						<Link href={"#"}>محافل قرآنية</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"#"}>مؤتمرات</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"#"}>لقاءات</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"#"}>اجتماعات</Link>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="flex flex-col space-y-2">
		// 				<Link href="#">الاصدارات</Link>
		// 				<ul className="space-y-3 text-sm text-slate-500">
		// 					<li>
		// 						<Link href={"#"}>كتب</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"#"}>دوريات</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"#"}>مجلة المؤسسة</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"#"}>كتيبات تعليمية</Link>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="flex flex-col space-y-2">
		// 				<Link href="#">المكتبة التخصصية</Link>
		// 				<ul className="space-y-3 text-sm text-slate-500">
		// 					<li>
		// 						<Link href={""}>مطبوع - عربي</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={""}>مطبوع - لغات اخرى</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={""}>مخطوط - عربي</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={""}>مخطوط - لغات اخرى</Link>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="flex flex-col space-y-2">
		// 				<Link href="#">رابطة الامام (ع)</Link>
		// 				<ul className="space-y-3 text-sm text-slate-500">
		// 					<li>
		// 						<Link href={""}>اشبال</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={""}>شباب</Link>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="flex flex-col space-y-2">
		// 				<Link href="#">حول المؤسسة</Link>
		// 				<ul className="space-y-3 text-sm text-slate-500">
		// 					<li>
		// 						<Link href={"/about#contact"}>
		// 							رؤية المؤسسة
		// 						</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"/about#contact"}>
		// 							اهداف المؤسسة
		// 						</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"/about#contact"}>شعب واقسام</Link>
		// 					</li>
		// 					<li>
		// 						<Link href={"/about#contact"}>
		// 							معلومات التواصل
		// 						</Link>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<Separator className="bg-slate-300 w-full" />
		// 	<div className="flex justify-center items-center gap-8 w-full">
		// 		<div className="flex gap-2 items-center">
		// 			<Link
		// 				href="#"
		// 				className="font-light text-sm text-slate-400 hover:text-green-700 duration-300"
		// 			>
		// 				خريطة الموقع
		// 			</Link>
		// 			<div className="h-1 w-1 rounded-full bg-slate-300" />
		// 			<Link
		// 				href="#"
		// 				className="font-light text-sm text-slate-400 hover:text-green-700 duration-300"
		// 			>
		// 				حقوق النشر
		// 			</Link>
		// 			<div className="h-1 w-1 rounded-full bg-slate-300" />
		// 			<Link
		// 				href="#"
		// 				className="font-light text-sm text-slate-400 hover:text-green-700 duration-300"
		// 			>
		// 				مواقع ذات صلة
		// 			</Link>
		// 		</div>
		// 	</div>
		// </div>

		<footer className="bg-gradient-to-b from-transparent to-primary-100">
			<div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<div className="flex justify-center text-teal-600 lg:justify-start">
							<Image
								src={`/logo.png`}
								width={150}
								height={150}
								className=""
								alt="logo"
							/>
						</div>

						<p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs mx-auto lg:text-right">
							نسعى إلى تقديم رؤية فكرية شاملة من خلال تحقيق ونشر
							الأعمال العلمية والثقافية. نعمل على أن تكون المؤسسة
							مرجعًا للنخب والأوساط العلمية.
						</p>

						<ul className="mt-8 flex justify-center gap-6 lg:justify-start md:gap-8">
							{[
								{ name: "Facebook", icon: <FacebookIcon /> },
								{ name: "Instagram", icon: <InstagramIcon /> },
								{ name: "Tiktok", icon: <TikTokIcon /> },
								{ name: "Twitter-X", icon: <XIcon /> },
								{ name: "Youtube", icon: <YoutubeIcon /> },
							].map((social) => (
								<li key={social.name}>
									<Link
										href="#"
										rel="noreferrer"
										target="_blank"
										className="text-teal-700 transition hover:text-teal-700/75"
									>
										<span className="sr-only">
											{social.name}
										</span>
										{social.icon}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 mx-auto">
						<div className="text-center sm:text-right">
							<p className="text-lg font-medium text-gray-900">
								الإمام زين العابدين (ع)
							</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										حياته الكريمة
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										اثاره المباركة
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										صور
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										الإمام في الادب
									</a>
								</li>
							</ul>
						</div>

						<div className="text-center sm:text-right">
							<p className="text-lg font-medium text-gray-900">
								الأنشطة
							</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										محافل قرآنية
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										مؤتمرات
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										لقاءات
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										اجتماعات
									</a>
								</li>
							</ul>
						</div>

						<div className="text-center sm:text-right">
							<p className="text-lg font-medium text-gray-900">
								الأصدارات
							</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										كتب
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										دوريات
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										المجلة
									</a>
								</li>
							</ul>
						</div>

						<div className="text-center sm:text-right">
							<p className="text-lg font-medium text-gray-900">
								المكتبة
							</p>
							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										مطبوع - عربي
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										مطبوع - لعات اخرى
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										مخطوط - عربي
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										مخطوط - لغات اخرى
									</a>
								</li>
							</ul>
						</div>
						<div className="text-center sm:text-right">
							<p className="text-lg font-medium text-gray-900">
								رابطة الإمام (ع)
							</p>
							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										اشبال
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										شباب
									</a>
								</li>
							</ul>
						</div>
						<div className="text-center sm:text-right">
							<p className="text-lg font-medium text-gray-900">
								مشاريع
							</p>
							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										الخيمة السجادية
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										موسوعة الامام زين العابدين
									</a>
								</li>
							</ul>
						</div>
						<div className="text-center sm:text-right">
							<p className="text-lg font-medium text-gray-900">
								حول المؤسسة
							</p>
							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										رؤية المؤسسة
									</a>
								</li>
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										اهداف المؤسسة
									</a>
								</li>
							</ul>
						</div>
						<div className="text-center sm:text-right">
							<p className="text-lg font-medium text-gray-900">
								معلومات التواصل
							</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
										href="#"
									>
										<span className="flex-1 text-gray-700">
											dev@imamzain.org
										</span>
										<EmailIcon width={18} fill="#374151" />
									</a>
								</li>

								<li>
									<a
										className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
										href="#"
									>
										<span className="flex-1 text-gray-700">
											(+964) 778 294 3996
										</span>
										<PhoneIcon width={18} fill="#374151" />
									</a>
								</li>

								<li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
									<address className="-mt-0.5 flex-1 not-italic text-gray-700">
										شارع ملحق الروان, النجف الاشرف, العراق
									</address>
									<LocationIcon width={18} fill="#374151" />
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-gray-100 pt-6">
					<div className="text-center sm:flex sm:justify-around sm:text-right">
						<p className="text-sm space-x-3 text-gray-500">
							<a
								href="#"
								className="block sm:inline hover:text-secondary-300"
							>
								كل الحقوق محفوظة
							</a>
							<span>&middot;</span>
							<a
								href="#"
								className="block sm:inline hover:text-secondary-300"
							>
								خريطة الموقع
							</a>
							<span>&middot;</span>
							<a
								href="#"
								className="block sm:inline hover:text-secondary-300"
							>
								سياسة الخصوصية
							</a>
						</p>

						<p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
							&copy; 2024 العتبة الحسينية المقدسة - مؤسسة الامام
							زين العابدين
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
