import CtaSection from "@src/pages/(landing-page)/home/_components/Cta.section"
import FAQSection from "../../home/_components/FAQ"
import SecuritySection from "../../home/_components/SecuritySection"
import HeroSection from "../../home/_components/Hero.section";
import HowItWorksSection from "../../home/_components/HowItWorks.section";

type FAQItem = {
    question: string;
    answer: string;
};


function WebsiteBlocker({}) {
	const faqItems: FAQItem[] = [
    {
        question: "What is Ashdeck’s Website Blocker?",
        answer: "Ashdeck’s Website Blocker is a tool that helps you block distracting websites, stay focused, and improve productivity."
    },
    {
        question: "Can I customize which websites to block?",
        answer: "Yes! You can create your blocklists and choose specific websites to restrict."
    },
    {
        question: "Does Ashdeck work with the Pomodoro Timer?",
        answer: "Absolutely! You can set up focus sessions that block distractions while you work using the Pomodoro technique."
    },
    {
        question: "Can I customize my Pomodoro sessions?",
        answer: "Absolutely! You can adjust work session lengths, and break times, and even automate blocking distractions during focus periods."
    },
    {
        question: "Is Ashdeck’s Website Blocker free?",
        answer: "Yes! Ashdeck offers a free website blocker to help you stay productive without distractions."
    },
    {
        question: "Can I schedule website blocking in advance?",
        answer: "Yes! You can plan focused work sessions and automatically block distracting sites during specific periods."
    },
    {
        question: "Who should use Ashdeck’s Website Blocker?",
        answer: "Anyone who wants to eliminate distractions—students, professionals, remote workers, freelancers, and creatives."
    }
    ];

    const hero = {
        headline: "The Website Blocker That Helps You Stay Focused",
        detail: "Distractions are everywhere—social media, news sites, and endless browsing keep you from getting things done. Ashdeck’s Website Blocker is designed to help you break free from distractions and reclaim your time."
    }

    const cta = {
        headline: "Reclaim Your Focus with Ashdeck’s Website Blocker",
        detail: "Stop letting distractions control your day. Take charge of your focus, boost your productivity, and accomplish more.",
        cta_text: "🚀 Try Ashdeck’s Website Blocker for Free!"
    }

    const features = [
		{
			title: "Work Smarter, Not Harder",
			icon: "⚡",
			description: "The Pomodoro technique trains your brain to focus for short, productive sessions, keeping you engaged without mental exhaustion.",
		},
		{
			title: "Stay Accountable and Avoid Burnout",
			icon: "🧘‍♂️",
			description: "With built-in breaks, you’ll maintain energy throughout the day while reducing stress and decision fatigue.",
		},
		{
			title: "Eliminate Distractions with the Website Blocker",
			icon: "🚫",
			description: "Pair the Pomodoro Timer with Ashdeck’s website blocker to prevent mindless browsing and stay locked into deep work.",
		},
		{
			title: "Customizable Focus Sessions",
			icon: "⏳",
			description: "Adjust session lengths, break times, and work cycles to fit your unique workflow and optimize your efficiency.",
		},
	]

    const how_it_works = {
        features: features,
        title: "Block Distractions, Stay Focused, and Get More Done",
        details: "Ashdeck’s free website blocker empowers you to control your online habits by blocking distracting websites, helping you stay focused and productive. Whether you need deep work sessions, study time, or a break from social media, Ashdeck is your ultimate focus tool."
    }
	return (
		<main className={"flex flex-col bg-white dark:bg-bg-dark"}>
            <HeroSection headline={hero.headline} details={hero.detail} />
            <HowItWorksSection featured_items={how_it_works.features} title={how_it_works.title} details={how_it_works.details} />
			<SecuritySection />
			<FAQSection faqItems={faqItems} />
			<CtaSection headline={cta.headline} detail={cta.detail} cta_text={cta.cta_text} />
		</main>
	)
}

export default WebsiteBlocker
