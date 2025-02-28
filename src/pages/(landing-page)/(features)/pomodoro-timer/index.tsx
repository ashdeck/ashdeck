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
        detail: "Struggling to stay productive? Distractions, procrastination, and mental fatigue can make it hard to get things done. The secret to working smarter isn’t willpower—it’s using the right method.",
        mobile_details: "Struggling to focus? The key isn’t willpower—it’s the right approach."
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

    const for_who = [
      {
        title: "Students",
        description: "Stay engaged while studying, retain information better, and complete assignments with less stress.",
        image: <img className={"w-[30%] absolute"} src={"/images/student.png"} alt={""} />,
      },
      {
        title: "Freelancers & Entrepreneurs",
        description: "Maintain productivity, set structured work hours, and minimize distractions while working from home.",
        image: <img className={"w-[20%] absolute"} src={"/images/freelancer.png"} alt={""} />,
      },
      {
        title: "Remote Workers & Professionals",
        description: "Improve time management, avoid burnout, and maintain deep focus during critical tasks.",
        image: <img className={"w-[25%] absolute"} src={"/images/pc.png"} alt={""} />,
      },
      {
        title: "Creatives and Writers",
        description: "Stay in the flow state longer, spark creativity, and prevent mental fatigue.",
        image: <img className={"w-[25%] absolute"} src={"/images/papers.png"} alt={""} />,
      },
      {
        title: "Anyone Battling Procrastination",
        description: "Develop discipline, get tasks done faster, and create healthier work habits.",
        image: <img className={"w-[25%] absolute"} src={"/images/adhd2.png"} alt={""} />,
      }
    ]

	return (
		<main className={"flex flex-col bg-white dark:bg-bg-dark"}>
            <HeroSection headline={hero.headline} details={hero.detail} mobile_details={hero.mobile_details} />
            <HowItWorksSection featured_items={how_it_works.features} title={how_it_works.title} details={how_it_works.details} />
            <ForWhoSection forWhoItems={for_who} />
			<SecuritySection />
			<FAQSection faqItems={faqItems} />
			<CtaSection headline={cta.headline} detail={cta.detail} />
		</main>
	)
}

export default PomodoroTimer
