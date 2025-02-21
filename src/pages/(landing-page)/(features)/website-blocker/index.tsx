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
			<CtaSection headline={cta.headline} detail={cta.detail} cta_text={cta.cta_text} />
		</main>
	)
}

export default WebsiteBlocker
