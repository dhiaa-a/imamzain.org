"use client"

import Image from "next/image"

import { AnimatePresence, motion, useScroll } from "framer-motion"
import { Separator } from "../../components/ui/separator"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

import {
	Kaaba,
	LibraryColored,
	Madinah,
	Manuscript,
	PaperAndPen,
	Pray,
	Scholar,
} from "../../components/icons"
import { useState } from "react"
import { PhoneIcon, EmailIcon, LocationIcon } from "@/components/icons"

const formSchema = z.object({
	name: z
		.string()
		.min(2)
		.min(3, { message: "لا يمكن ان يكون الاسم اقل من 3 احرف" })
		.max(50, {
			message: "لا يمكن ان يتجاوز الاسم اكثر من 50 حرف.",
		}),
	email: z.coerce.string().email({ message: "ادخل ايميل حقيقي" }),
	message: z
		.string()
		.max(250, { message: "لا يمكن ان تتجاوز الرسالة اكثر من 250 حرف" }),
})

const logos = [
	"uokufa.svg",
	"imamhusseinorg.svg",
	"buzzfeed.svg",
	"forbes.svg",
	"macys.svg",
	"mrbeast.svg",
	"menshealth.svg",
	"budweiser.svg",
]

const aboutStatements = [
	{
		title: "رؤية المؤسسة",
		content:
			"الريادة والتميز في إيصال علوم الامام السجاد عليه السلام الى الباحثين والنخب والتعريف به وبأصحابه وبعلماء المدينة المنورة وأدوارهم في نصرة الحق والحقيقة",
	},
	{
		title: "رسالة المؤسسة",
		content:
			"تحفيز الباحثين والمحققين لاشراء الجانب العلمي والفكري والثقافي المرتبط بالامام السجاد (ع) وإشاعة روح التخلث بأخلاقه والألتزام بمبادئه بين ابنائنا في المؤسسات العلمية والنخبوية عبر اعمال وفعاليات علمية وفنية",
	},
	{
		title: "اهداف عمل المؤسسة",
		content: (
			<ul className="list-disc mr-5">
				<li>تسليط الضوء على ما لم يظهر من آثار الامام السجاد (ع)</li>
				<li>
					بلورة صياغة جديدة وطرح رؤية فكرية شاملة فيما قد مضى العمل
					عليه مسبقا تتناسب والهدف الرئيسي للمؤسسة
				</li>
				<li>جعل المؤسسة حاضرة في الاوساط العبمية والنخبوية</li>
			</ul>
		),
	},
	{
		title: "الجهات المستهدفة",
		content: (
			<ul className="list-disc mr-5">
				<li>طلبة العلوم الدينية</li>
				<li>الباحثون المختصون من الأكاديميين</li>
				<li>الباحثون عن المعرفة</li>
			</ul>
		),
	},
]

const features = [
	{
		icon: <Manuscript />,
		title: "تراث الإمام السجاد",
		desc: "حياة الامام السجاد عليه السلام وتراثه الروائي والقرآني والعقائدي تحقيقا وتأليفا",
		image: (
			<img
				src="https://placehold.co/600x600?text=1"
				alt="feature img"
				className="rounded-2xl"
			/>
		),
	},
	{
		icon: <Pray />,
		title: "المجلة السجادية",
		desc: "الاهتمام البالغ بالصحيفة السجادية ورسالة الحقوق - على وجه الخصوص - بحثا ودراسة وتفعيلها اجتماعيا وأكاديميا",
		image: (
			<img
				src="https://placehold.co/600x600?text=2"
				alt="feature img"
				className="rounded-2xl"
			/>
		),
	},
	{
		icon: <Kaaba />,
		title: "الحفاظ على الهوية الدينية",
		desc: "الدراسة والتنقيب عن اصحاب الإمام الميامين وتوضيح دورهم في حفظ الهوية الدينية",
		image: (
			<img
				src="https://placehold.co/600x600?text=3"
				alt="feature img"
				className="rounded-2xl"
			/>
		),
	},
	{
		icon: <Madinah />,
		title: "المدينة المنورة - بذرة التَشَيُّع",
		desc: "بيان واقع المدينة المنورة كونها منطلقا للنواة الاولى للتشيع ومهد الفكر الاسلامي الاصيل",
		image: (
			<img
				src="https://placehold.co/600x600?text=4"
				alt="feature img"
				className="rounded-2xl"
			/>
		),
	},
	{
		icon: <Scholar />,
		title: "علماء الشيعة",
		desc: " متابعة حياة علماء الشيعة في المدينة المنورة وما جاورها، في غاية نشر مساهماتهم واهميتهم في تاريخ نشر علوم السجاد (ع)",
		image: (
			<img
				src="https://placehold.co/600x600?text=5"
				alt="feature img"
				className="rounded-2xl"
			/>
		),
	},
	{
		icon: <PaperAndPen />,
		title: "ببلوغرافيا",
		desc: "صنع فهارس شاملة للكتب المطبوعة والمخطوطة وتوفيرها للعامة",
		image: (
			<img
				src="https://placehold.co/600x600?text=6"
				alt="feature img"
				className="rounded-2xl"
			/>
		),
	},
	{
		icon: <PaperAndPen />,
		title: "تصنيف المخطوطات",
		desc: "القيام بالبحث، والتحرير، والنشر للمخطوطات الحجرية وزيادة مستوى الوصولية اليها",
		image: (
			<img
				src="https://placehold.co/600x600?text=7"
				alt="feature img"
				className="rounded-2xl"
			/>
		),
	},
	{
		icon: <LibraryColored />,
		title: "المكتبة التخصصية",
		desc: "انشاء وتنمية مكتبة تخصصية في التراث المخطوط للإمام السجاد عليه السلام",
		image: (
			<img
				src="https://placehold.co/600x600?text=8"
				alt="feature img"
				className="rounded-2xl"
			/>
		),
	},
]

export default function About() {
	const [activeFeature, setActiveFeature] = useState(features[0])

	const contactForm = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	})
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		console.log(values)
	}

	return (
		<>
			<div className="bg-white relative flex items-center justify-center overflow-hidden z-10 ">
				<div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
					<div className="flex gap-16 items-center justify-between lg:flex-row py-16">
						<div className="relative w-1/2">
							<div className="absolute top-0 -right-48 z-0 opacity-50">
								<img
									src="https://placehold.co/200x100"
									className="w-36 z-0  h-full object-fill fill-y text-y"
								/>
							</div>
							<div className="flex flex-col justify-center items-start lg:max-w-xl lg:pr-5 relative z-40">
								<p className="flex text-sm uppercase">
									ماذا تريد ان تعرف عن مؤسستنا؟
								</p>
								<h2 className="mb-6 max-w-lg font-light leading-snug tracking-tight sm:text-5xl sm:leading-snug">
									<span className="my-1 w-fit block border-b-8 bg-white px-4 font-bold ">
										تعرف على المؤسسة
									</span>
								</h2>

								<Accordion
									type="single"
									collapsible
									className="w-[600px]"
								>
									{aboutStatements.map((statement) => (
										<AccordionItem
											key={statement.title}
											value={statement.title}
										>
											<AccordionTrigger className="text-xl hover:no-underline hover:-translate-x-2 font-semibold text-gray-700">
												* {statement.title}
											</AccordionTrigger>
											<AccordionContent>
												{statement.content}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						</div>
						<div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16 17l-4 4m0 0l-4-4m4 4V3"
								/>
							</svg>
							<div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
								<img src="https://placehold.co/600x600" />
							</div>
						</div>
					</div>
				</div>

				{/* silly divs for animations */}
				<div className="absolute -bottom-24 left-10 z-0 opacity-10 ">
					<svg
						width="800px"
						height="800px"
						viewBox="0 0 24 24"
						className="w-96 z-0 h-full object-fill fill-gray-300 text-gray-300"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
						/>
					</svg>
				</div>
				<div className="absolute -bottom-0 left-3/4 z-0 opacity-10 ">
					<svg
						width="800px"
						height="800px"
						viewBox="0 0 256 256"
						xmlns="http://www.w3.org/2000/svg"
						className="w-48 z-0  h-full -rotate-90   object-fill fill-red-300 text-red-300"
					>
						<path
							d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
							fillRule="evenodd"
						/>
					</svg>
				</div>
				<div className="absolute top-10 left-3/4 z-0 opacity-10 ">
					<svg
						fill="#000000"
						width="800px"
						height="800px"
						viewBox="0 0 256 256"
						xmlns="http://www.w3.org/2000/svg"
						className="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300"
					>
						<path
							d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z"
							fillRule="evenodd"
						/>
					</svg>
				</div>
			</div>

			{/* features */}
			<div className="p-4 h-[80vh] text-gray-600 flex flex-col justify-center items-center gap-12">
				<div className="flex lg:gap-16  items-center">
					<div>
						<h1 className="mb-14 text-4xl font-bold text-indigo-900">
							ماذا تشمل توجهات المؤسسة؟
						</h1>
						<ul className="grid place-content-center sm:grid-cols-2 gap-8">
							{features.map((feature, index) => (
								<motion.li
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: 0 + index / 10,
										damping: 10,
										duration: 0.4,
										type: "spring",
									}}
									style={
										activeFeature.title === feature.title
											? {
													borderColor: "#b8e3e0",
													boxShadow:
														"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
											  }
											: {
													borderColor: "transparent",
											  }
									}
									key={feature.title}
									onMouseEnter={() =>
										setActiveFeature(feature)
									}
									className="flex border-2 p-4 rounded-xl hover:cursor-pointer"
								>
									<div className="px-4 text-5xl font-extralight text-indigo-700">
										{feature.icon}
									</div>
									<div>
										<div className="text-xl font-bold text-indigo-800">
											{feature.title}
										</div>
										<p className="max-w-xs py-2 text-sm text-indigo-900">
											{feature.desc}
										</p>
									</div>
								</motion.li>
							))}
						</ul>
					</div>

					<AnimatePresence mode="wait">
						<motion.div
							initial={{ opacity: 0, y: -30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -30 }}
							transition={{ delay: 1, duration: 0.5 }}
						>
							{activeFeature ? activeFeature.image : null}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* logos carousel */}
			<div className="flex flex-col gap-2 justify-center items-center overflow-hidden">
				<Separator className="my-4 w-3/4" />
				<h2 className="text-2xl border-b-[1px] px-8 my-10 border-slate-300 pb-4 font-semibold">
					الجهات المتعاونة
				</h2>

				<div className="py-0">
					<div className="w-full overflow-hidden">
						<motion.div
							className="flex items-center gap-x-20"
							animate={{ x: ["0%", "129%"] }}
							transition={{
								ease: "linear",
								duration: 20,
								repeat: Infinity,
								repeatType: "loop",
							}}
							style={{ willChange: "transform" }}
						>
							{[...logos, ...logos].map((logo, index) => (
								<motion.div
									key={index}
									className="flex-none"
									style={{ marginRight: "1rem" }}
								>
									<Image
										className="p-0 m-0"
										src={`/images/logos/${logo}`}
										width={200}
										height={200}
										alt={logo}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
				<Separator className="my-4 w-3/4" />
			</div>

			{/* contact us */}
			<div className="relative overflow-hidden">
				<div className="absolute -z-50 -right-40 -bottom-40 border-[16px] border-primary rounded-full w-[500px] h-[500px]"></div>
				<div className="absolute -z-50 -left-40 -top-40 border-[16px] border-secondary rounded-full w-[500px] h-[500px]"></div>
				<div className="max-w-[80vw] mx-auto flex bg-white justify-center items-center flex-col gap-10 rounded-xl shadow-xl border-2 border-primary-200 m-20 p-32">
					<h2 className="text-3xl font-bold">جهات الاتصال</h2>
					<div className="flex gap-40">
						<div className="flex gap-4 items-center">
							<p dir="ltr" className="text-slate-500 text-md">
								+964 782 943 9996
							</p>
							<PhoneIcon />
						</div>
						<div className="flex gap-4 items-center">
							<p className="text-slate-500 text-md">
								support@imamzain.org
							</p>
							<EmailIcon />
						</div>
						<div className="flex gap-4 items-center">
							<p className="text-slate-500 text-md">
								شارع ملحق الروان، النجف الاشرف
							</p>
							<LocationIcon />
						</div>
					</div>
					<div className="flex gap-16 justify-center items-center">
						<div className="w-1/4">
							<h2 className="text-3xl font-semibold my-8">
								تواصل معنا
							</h2>
							<Form {...contactForm}>
								<form
									onSubmit={contactForm.handleSubmit(
										onSubmit,
									)}
									className="space-y-8"
								>
									<FormField
										control={contactForm.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>الاسم</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="ادخل اسمك الرباعي"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={contactForm.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													البريد الالكتروني
												</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder="ادخل بريدك الالكتروني"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={contactForm.control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormLabel>الرسالة</FormLabel>
												<FormControl>
													<Textarea
														className="h-32"
														placeholder="اكتب سؤال أو استفسار، سيتم الرد عليه في غضون يومين كحد اقصى"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button
										className="bg-primary text-white px-12 py-2"
										type="submit"
									>
										ارسال
									</Button>
								</form>
							</Form>
						</div>
						<div className="w-3/4">
							<Image
								className="rounded-xl"
								src="/images/map-location.png"
								alt="map location"
								width={1500}
								height={1500}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
