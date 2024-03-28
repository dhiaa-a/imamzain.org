"use client"
import Navigation from "@/components/header/navigation"
import { LanguagesIcon, Manuscript } from "@/components/icons"
import Socials from "@/components/ui/socials"
import Link from "next/link"
export default function Test() {
	return (
		<div className="h-screen flex flex-col justify-start items-end">
			<div>
				<Navigation />
			</div>
		</div>
	)
}
