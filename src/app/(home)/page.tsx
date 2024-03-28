import Activities from "@/components/activities"
import Hero from "@/components/hero"
import Publications from "@/components/publications"
import SectionsShowcase from "@/components/sections-showcase"
import Testimonials from "@/components/testimonials"

export default function Home() {
	return (
		<main className="">
			<Hero />
			<SectionsShowcase />
			<Publications />
			<Activities />
			<Testimonials />
		</main>
	)
}
