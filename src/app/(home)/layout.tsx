import type { Metadata } from "next"
import { Footer, Header } from "@/components"

export const metadata: Metadata = {
	title: "مؤسسة الامام زين العابدين",
	description:
		" استكشف رسالة وأهداف مؤسستنا الرائدة في البحث والدراسات حول الإمام زين العابدين. اقرأ أحاديثه اليومية وتصفح آخر الإصدارات والأخبار. كل شيء حول الامام السجاد",
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
			<Footer />
		</>
	)
}
