"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

import { books } from "@/lib/data"

import { DownloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { ShareIcon } from "@/components/icons"
import clsx from "clsx"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Page({ params }: { params: { slug: string } }) {
	const [activePage, setActivePage] = useState(1)
	const book = books.filter((book) => book.slug === params.slug)[0]

	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return <></>
}
