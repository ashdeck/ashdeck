import CtaSection from "@src/pages/(landing-page)/home/_components/Cta.section"
import FAQSection from "../../home/_components/FAQ"
import SecuritySection from "../../home/_components/SecuritySection"
import HeroSection from "../../home/_components/Hero.section";
import HowItWorksSection from "../../home/_components/HowItWorks.section";

type FAQItem = {
    question: string;
    answer: string;
};

function PomodoroTimer({}) {
	const faqItems: FAQItem[] = [
    {
        question: "What is a Pomodoro Timer?",
        answer:
            "A Pomodoro Timer is a time management tool that helps you work in focused intervals (typically 25 minutes) followed by short breaks. It’s scientifically proven to enhance productivity."
    },
    {
        question: "How does Ashdeck’s Pomodoro Timer work?",
        answer: "Set your work session length, start the timer, and stay focused. After each session, take a short break before beginning the next cycle."
    },
    {
        question: "Is the Pomodoro Timer free to use?",
        answer: "Yes! Ashdeck offers a free Pomodoro Timer along with website-blocking features to maximize your focus."
    },
    {
        question: "Can I customize my Pomodoro sessions?",
        answer: "Absolutely! You can adjust work session lengths, and break times, and even automate blocking distractions during focus periods."
    },
    {
        question: "Why combine a Pomodoro Timer with a Website Blocker?",
        answer: "The best way to stay productive is to eliminate distractions while working. Ashdeck blocks distracting websites during focus sessions, ensuring you stay on task."
    },
    {
        question: "Who should use Ashdeck’s Pomodoro Timer?",
        answer: "Anyone who wants to improve productivity—students, professionals, freelancers, and anyone looking to stay focused while working."
    }
    ];

    const hero = {
        headline: "The Pomodoro Timer That Helps You Stay Focused",
        detail: "Struggling to stay productive? Distractions, procrastination, and mental fatigue can make it hard to get things done. The secret to working smarter isn’t willpower—it’s using the right method."
    }

    const cta = {
        headline: "Work With Laser Focus—One Pomodoro at a Time",
        detail: "Stop multitasking, start focusing. Whether you’re working, studying, or tackling a creative project, Ashdeck’s Pomodoro Timer helps you stay on track and accomplish more."
    }

    const features = [
		{
			title: "Plan Your Day with Ease",
			icon: "📝",
			description: `Organize your to-dos, set deadlines, and break down projects into manageable steps—all in one simple dashboard.`,
		},
		{
			title: "Stay Focused with the Pomodoro Timer",
			icon: "⏳",
			description: "Combine task management with the Pomodoro Timer to work in focused sprints and avoid burnout.",
		},
		{
			title: "Block Distractions with the Website Blocker",
			icon: "🚫",
			description: "Schedule focus sessions and block time-wasting websites, ensuring you stay on task without interruptions.",
		},
		{
			title: "Track Your Productivity",
			icon: "📊",
			description: "Monitor your progress, see what you’ve accomplished, and adjust your workflow to maximize efficiency.",
		},
	]

        const how_it_works = {
        features: features,
        details: "Ashdeck’s Pomodoro Timer helps you work in focused sprints, preventing burnout while maximizing productivity. By breaking tasks into manageable intervals, you’ll maintain peak concentration without feeling overwhelmed.",
        title: "Boost Focus and Beat Procrastination with the Pomodoro Timer"
    }
	return (
		<main className={"flex flex-col bg-white dark:bg-bg-dark"}>
            <HeroSection headline={hero.headline} details={hero.detail} />
            <HowItWorksSection featured_items={how_it_works.features} title={how_it_works.title} details={how_it_works.details} />
			<SecuritySection />
			<FAQSection faqItems={faqItems} />
			<CtaSection headline={cta.headline} detail={cta.detail} />
		</main>
	)
}

export default PomodoroTimer
