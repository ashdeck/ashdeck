import CtaSection from "@src/pages/(landing-page)/home/_components/Cta.section"
import FAQSection from "../../home/_components/FAQ"
import SecuritySection from "../../home/_components/SecuritySection"
import HeroSection from "../../home/_components/Hero.section";
import HowItWorksSection from "../../home/_components/HowItWorks.section";
import ForWhoSection from "../../home/_components/ForWho.section";

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

    const cta = {
        headline: "Turn Your To-Dos into Dones with Ashdeck",
        detail: "No more scattered notes or unfinished tasks. With Ashdeck’s Task Manager, you’ll always know what to focus on next."
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
        title: "Stay Organized and Get More Done with Ashdeck’s Task Manager",
        details: "Ashdeck’s Task Manager helps you structure your day, prioritize tasks, and track your progress—all in one distraction-free workspace. Whether you’re tackling a major project, organizing daily tasks, or simply trying to stay on top of your workload, Ashdeck helps you work smarter."
    }

    const for_who = [
      {
        title: "Students",
        description: "Stay on top of assignments, exams, and study sessions without last-minute stress.",
        image: <img className={"w-[30%] absolute"} src={"/images/student.png"} alt={""} />,
      },
      {
        title: "Freelancers & Entrepreneurs",
        description: "Manage projects, meet deadlines, and maintain a productive work routine.",
        image: <img className={"w-[20%] absolute"} src={"/images/freelancer.png"} alt={""} />,
      },
      {
        title: "Remote Workers & Professionals",
        description: "Organize your workload, eliminate distractions, and boost efficiency.",
        image: <img className={"w-[25%] absolute"} src={"/images/pc.png"} alt={""} />,
      },
      {
        title: "Creatives and Writers",
        description: "Structure your workflow, manage multiple projects, and stay in the creative zone.",
        image: <img className={"w-[25%] absolute"} src={"/images/papers.png"} alt={""} />,
      },
      {
        title: "Anyone Who Wants to Be More Productive",
        description: "If you struggle with focus, time management, or motivation, Ashdeck’s Task Manager is for you!",
        image: <img className={"w-[25%] absolute"} src={"/images/adhd2.png"} alt={""} />,
      }
    ]

	return (
		<main className={"flex flex-col bg-white dark:bg-bg-dark"}>
            <HeroSection headline={hero.headline} details={hero.detail} />
            <HowItWorksSection featured_items={how_it_works.features} title={how_it_works.title} details={how_it_works.details} />
            <ForWhoSection forWhoItems={for_who} />
			<SecuritySection />
			<FAQSection faqItems={faqItems} />
			<CtaSection headline={cta.headline} detail={cta.detail} />
		</main>
	)
}

export default TaskManager
