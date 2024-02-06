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

const LocationIcon = () => (
	<svg
		width="24px"
		height="24px"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
			fill="#296718"
		/>
	</svg>
)

const EmailIcon = () => (
	<svg
		width="24px"
		height="24px"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
			stroke="#296718"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const PhoneIcon = () => (
	<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
		<path
			d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853"
			stroke="#1C274C"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
		<path
			d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
			stroke="#296718"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
		<path
			d="M15.1008 15.0272L15.6446 15.5437V15.5437L15.1008 15.0272ZM15.5562 14.5477L15.0124 14.0312V14.0312L15.5562 14.5477ZM17.9729 14.2123L17.5987 14.8623H17.5987L17.9729 14.2123ZM19.8834 15.312L19.5092 15.962L19.8834 15.312ZM20.4217 18.7584L20.9655 19.275L20.9655 19.2749L20.4217 18.7584ZM19.0012 20.254L18.4574 19.7375L19.0012 20.254ZM17.6763 20.9631L17.75 21.7095L17.6763 20.9631ZM7.8154 16.4752L8.3592 15.9587L7.8154 16.4752ZM3.75185 6.92574C3.72965 6.51212 3.37635 6.19481 2.96273 6.21701C2.54911 6.23921 2.23181 6.59252 2.25401 7.00613L3.75185 6.92574ZM9.19075 8.80507L9.73454 9.32159L9.19075 8.80507ZM9.47756 8.50311L10.0214 9.01963L9.47756 8.50311ZM9.63428 5.6931L10.2467 5.26012L9.63428 5.6931ZM8.3733 3.90961L7.7609 4.3426V4.3426L8.3733 3.90961ZM4.7177 3.09213C4.43244 3.39246 4.44465 3.86717 4.74498 4.15244C5.04531 4.4377 5.52002 4.42549 5.80529 4.12516L4.7177 3.09213ZM11.0632 13.0559L11.607 12.5394L11.0632 13.0559ZM10.6641 19.8123C11.0148 20.0327 11.4778 19.9271 11.6982 19.5764C11.9186 19.2257 11.8129 18.7627 11.4622 18.5423L10.6641 19.8123ZM15.113 20.0584C14.7076 19.9735 14.3101 20.2334 14.2252 20.6388C14.1403 21.0442 14.4001 21.4417 14.8056 21.5266L15.113 20.0584ZM15.6446 15.5437L16.1 15.0642L15.0124 14.0312L14.557 14.5107L15.6446 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4574 19.7375L19.545 20.7705L20.9655 19.275L19.8779 18.2419ZM8.3592 15.9587C4.48307 11.8778 3.83289 8.43556 3.75185 6.92574L2.25401 7.00613C2.35326 8.85536 3.13844 12.6403 7.27161 16.9917L8.3592 15.9587ZM9.73454 9.32159L10.0214 9.01963L8.93377 7.9866L8.64695 8.28856L9.73454 9.32159ZM10.2467 5.26012L8.98569 3.47663L7.7609 4.3426L9.02189 6.12608L10.2467 5.26012ZM9.19075 8.80507C8.64695 8.28856 8.64626 8.28929 8.64556 8.29002C8.64533 8.29028 8.64463 8.29102 8.64415 8.29152C8.6432 8.29254 8.64223 8.29357 8.64125 8.29463C8.63928 8.29675 8.63724 8.29896 8.63515 8.30127C8.63095 8.30588 8.6265 8.31087 8.62182 8.31625C8.61247 8.32701 8.60219 8.33931 8.5912 8.3532C8.56922 8.38098 8.54435 8.41511 8.51826 8.45588C8.46595 8.53764 8.40921 8.64531 8.36117 8.78033C8.26346 9.0549 8.21022 9.4185 8.27675 9.87257C8.40746 10.7647 8.99202 11.9644 10.5194 13.5724L11.607 12.5394C10.1793 11.0363 9.82765 10.1106 9.7609 9.65511C9.72871 9.43536 9.76142 9.31957 9.77436 9.28321C9.78163 9.26277 9.78639 9.25709 9.78174 9.26437C9.77948 9.26789 9.77498 9.27451 9.76742 9.28407C9.76363 9.28885 9.75908 9.29437 9.75364 9.30063C9.75092 9.30375 9.74798 9.30706 9.7448 9.31056C9.74321 9.31231 9.74156 9.3141 9.73985 9.31594C9.739 9.31686 9.73813 9.31779 9.73724 9.31873C9.7368 9.3192 9.73612 9.31992 9.7359 9.32015C9.73522 9.32087 9.73454 9.32159 9.19075 8.80507ZM10.5194 13.5724C12.0422 15.1757 13.1924 15.806 14.0699 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4023 15.7387 15.4824 15.6819C15.5223 15.6535 15.5556 15.6266 15.5825 15.6031C15.5959 15.5913 15.6078 15.5803 15.6181 15.5703C15.6233 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6368 15.5518 15.6388 15.5497C15.6398 15.5487 15.6408 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6432 15.5452C15.6439 15.5444 15.6446 15.5437 15.1008 15.0272C14.557 14.5107 14.5577 14.51 14.5583 14.5093C14.5586 14.509 14.5592 14.5083 14.5597 14.5078C14.5606 14.5069 14.5615 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5675 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.5831 14.4846 14.5885 14.4796 14.5933 14.4754C14.6029 14.467 14.61 14.4616 14.6146 14.4584C14.6239 14.4517 14.623 14.454 14.6102 14.459C14.5909 14.4666 14.5001 14.4987 14.3103 14.4679C13.9078 14.4025 13.0391 14.0472 11.607 12.5394L10.5194 13.5724ZM8.98569 3.47663C7.9721 2.04305 5.94388 1.80119 4.7177 3.09213L5.80529 4.12516C6.32812 3.57471 7.24855 3.61795 7.7609 4.3426L8.98569 3.47663ZM18.4574 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.75 21.7095C18.497 21.6357 19.1016 21.2373 19.545 20.7705L18.4574 19.7375ZM10.0214 9.01963C10.9889 8.00095 11.0574 6.40678 10.2467 5.26012L9.02189 6.12608C9.44404 6.72315 9.3793 7.51753 8.93377 7.9866L10.0214 9.01963ZM19.5092 15.962C20.3301 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2705 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8862 13.1113 15.0124 14.0312L16.1 15.0642ZM11.4622 18.5423C10.4785 17.9241 9.43149 17.0876 8.3592 15.9587L7.27161 16.9917C8.42564 18.2067 9.56897 19.1241 10.6641 19.8123L11.4622 18.5423ZM17.6026 20.2167C17.0561 20.2707 16.1912 20.2842 15.113 20.0584L14.8056 21.5266C16.0541 21.788 17.0742 21.7762 17.75 21.7095L17.6026 20.2167Z"
			fill="#296718"
		/>
	</svg>
)

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
