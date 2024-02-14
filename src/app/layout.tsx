import type { Metadata } from "next"
import { Noto_Naskh_Arabic } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import Loading from "./loading"
import { Header, Footer } from "../components"

const websiteFont = Noto_Naskh_Arabic({
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
		<html suppressHydrationWarning lang="ar" dir="rtl">
			<body className={websiteFont.className}>
				<Suspense fallback={<Loading />}>
					<Header />
					{children}
					<Footer />
				</Suspense>
			</body>
		</html>
	)
}
