import HeroSection from "@src/pages/(landing-page)/home/_components/Hero.section"
import HowItWorksSection from "@src/pages/(landing-page)/home/_components/HowItWorks.section"
import DiscoverSection from "@src/pages/(landing-page)/home/_components/Discover.section"
import CtaSection from "@src/pages/(landing-page)/home/_components/Cta.section"

function HomePage({}) {
	return (
		<main className={"flex flex-col bg-white dark:bg-bg-dark"}>
			<HeroSection />
			<HowItWorksSection />
			<DiscoverSection />
			<CtaSection />
		</main>
	)
}

export default HomePage
