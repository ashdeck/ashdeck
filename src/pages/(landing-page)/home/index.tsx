import HeroSection from "@src/pages/(landing-page)/home/_components/Hero.section"
import HowItWorksSection from "@src/pages/(landing-page)/home/_components/HowItWorks.section"
import ForWhoSection from "@src/pages/(landing-page)/home/_components/ForWho.section"
import CtaSection from "@src/pages/(landing-page)/home/_components/Cta.section"
import FAQSection from "./_components/FAQ"
import SecuritySection from "./_components/SecuritySection"

function HomePage({}) {
	return (
		<main className={"flex flex-col bg-white dark:bg-bg-dark"}>
			<HeroSection />
			<HowItWorksSection />
			<ForWhoSection />
			<SecuritySection />
			<FAQSection />
			<CtaSection />
		</main>
	)
}

export default HomePage
