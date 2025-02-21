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
        description: "Accelerate your academic journey and achieve top grades while saving time and money.",
        image: <img className={"w-[30%] absolute"} src={"/images/student.png"} alt={""} />,
      },
      {
        title: "Developers",
        description: "Dive deep into your work without interruptions and deliver your best code yet.",
        image: <img className={"w-[35%] absolute"} src={"/images/pc.png"} alt={""} />,
      },
      {
        title: "Marketers",
        description: "Cut through the noise with focus tools that let you block distractions. Stay ahead of the competition by using a website blocker to zero in on what drives results.",
        image: <img className={"w-[25%] absolute"} src={"/images/megaphone.png"} alt={""} />,
      },
      {
        title: "Writers",
        description: "Unleash your creativity uninterrupted. A free website blocker helps you stay in your flow, so you can craft your best work with no distractions.",
        image: <img className={"w-[40%] absolute"} src={"/images/papers.png"} alt={""} />,
      },
      {
        title: "Entrepreneurs",
        description: "Strategize smarter. Use focus techniques like the Pomodoro timer to make every minute count, and watch your business thrive like never before.",
        image: <img className={"w-[25%] absolute"} src={"/images/coin.png"} alt={""} />,
      },
      {
        title: "Freelancers",
        description: "Take control of your workload. With tools like a website blocker, balance productivity and freedom—your time is yours to own.",
        image: <img className={"w-[20%] absolute"} src={"/images/freelancer.png"} alt={""} />,
      },
      {
        title: "Designers",
        description: "Bring your ideas to life in a space free of interruptions. Whether it’s using a Pomodoro timer or blocking distractions, create without limits.",
        image: <img className={"w-[25%] absolute"} src={"/images/palette.png"} alt={""} />,
      },
      {
        title: "Researchers",
        description: "Focus deeply, discover boldly. A free website blocker can help you stay in the zone and achieve the breakthroughs you aim for.",
        image: <img className={"w-[25%] absolute"} src={"/images/researcher.png"} alt={""} />,
      },
      {
        title: "For those with ADHD",
        description: "Your mind is brilliant. A little structure—like a website blocker or Pomodoro timer—can help you channel your energy and own your day.",
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
