import type { Metadata } from "next"
import { Amiri } from "next/font/google"
import "./globals.css"

const websiteFont = Amiri({
	weight: ["400", "700"],
	subsets: ["arabic", "latin"],
})

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
		<html lang="ar" dir="rtl" className="scroll-smooth">
			<body className={websiteFont.className}>{children}</body>
		</html>
	)
}
