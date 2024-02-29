import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
	title: "",
	description: "",
}

export default function PublicationsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<Breadcrumb />
			{children}
		</div>
	)
}
