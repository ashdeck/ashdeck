import CtaSection from "@src/pages/(landing-page)/home/_components/Cta.section"
import FAQSection from "../../home/_components/FAQ"
import SecuritySection from "../../home/_components/SecuritySection"
import HeroSection from "../../home/_components/Hero.section";

type FAQItem = {
    question: string;
    answer: string;
};

function TaskManager({}) {
	const faqItems: FAQItem[] = [
    {
        question: "What is Ashdeck’s Task Manager?",
        answer: "Ashdeck’s Task Manager is a simple and effective tool for organizing tasks, setting priorities, and staying productive without feeling overwhelmed."
    },
    {
        question: "How does it help me stay focused?",
        answer: "By combining task management with a Pomodoro Timer and Website Blocker, Ashdeck helps you structure your work and eliminate distractions."
    },
    {
        question: "Can I schedule tasks and set deadlines?",
        answer: "Yes! You can create tasks, set due dates, and plan your workflow to stay on track with your goals."
    },
    {
        question: "Is Ashdeck’s Task Manager free?",
        answer: "Absolutely! Ashdeck offers a free task manager with productivity-enhancing features like focus timers and website blocking."
    },
    {
        question: "How does it integrate with the Pomodoro Timer and Website Blocker?",
        answer: "Ashdeck lets you manage tasks while working in focused Pomodoro sessions. It also blocks distracting websites during focus periods to keep you on track."
    },
    {
        question: "Who should use Ashdeck’s Task Manager?",
        answer: "Anyone who wants to stay organized—students, professionals, freelancers, and teams looking to improve productivity."
    }
    ];

    const hero = {
        headline: "The Task Manager That Keeps You Focused and Organized",
        detail: "Feeling overwhelmed by endless to-do lists and scattered tasks? Productivity isn’t about working harder—it’s about managing your time effectively. That’s where Ashdeck’s Task Manager comes in."
    }
	return (
		<main className={"flex flex-col bg-white dark:bg-bg-dark"}>
            <HeroSection headline={hero.headline} details={hero.detail} />
			<SecuritySection />
			<FAQSection faqItems={faqItems} />
			<CtaSection />
		</main>
	)
}

export default TaskManager
