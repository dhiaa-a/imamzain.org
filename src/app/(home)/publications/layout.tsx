import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
	title: "",
	description: "",
}
import { Noto_Naskh_Arabic } from "next/font/google"

const websiteFont = Noto_Naskh_Arabic({
	subsets: ["arabic", "latin"],
})
export default function PublicationsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className={websiteFont.className}>
			<Breadcrumb />
			{children}
		</div>
	)
}
