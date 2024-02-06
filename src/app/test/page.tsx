"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export default function Test() {
	const { scrollYProgress } = useScroll()
	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log("Page scroll: ", latest)
	})
	return (
		<>
			<div
				dir="ltr"
				className="max-w-4xl mx-auto font-serif text-3xl text-center"
			>
				<h1>
					<code>useScroll</code> demo
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
					minima commodi aut. Earum commodi, atque labore recusandae
					deserunt dolorum at dicta distinctio? Dignissimos cupiditate
					quidem magni temporibus iure? Dignissimos, libero?
				</p>
			</div>
		</>
	)
}
