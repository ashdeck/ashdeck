import HeroSection from "@src/pages/(landing-page)/home/_components/Hero.section"
import HowItWorksSection from "@src/pages/(landing-page)/home/_components/HowItWorks.section"
import ForWhoSection from "@src/pages/(landing-page)/home/_components/ForWho.section"
import CtaSection from "@src/pages/(landing-page)/home/_components/Cta.section"
import FAQSection from "./_components/FAQ"
import SecuritySection from "./_components/SecuritySection"

type FAQItem = {
  question: string;
  answer: string;
};

function HomePage({}) {
	const faqItems: FAQItem[] = [
    {
      question: "What is Ashdeck, and how does it work?",
      answer:
        "Ashdeck is a powerful productivity tool available as a Chrome extension. It includes features like a website blocker and the Pomodoro timer, helping you eliminate distractions and stay productive. With Ashdeck, you can focus on your work, manage your time effectively, and create a distraction-free workspace."
    },
    {
      question: "Is Ashdeck free to use?",
      answer:
        "Yes! Ashdeck offers a free website blocker as part of its key features. You can enjoy a istraction-free workflow at no cost. If you need advanced functionality, we also offer remium plans, but the free version is packed with everything you need to stay focused."
    },
    {
      question: "How does the website blocker work?",
      answer:
        "Ashdeck’s website blocker allows you to block distracting websites and apps effortlessly. You simply choose the sites you want to block, and set the duration or schedule, and Ashdeck ensures you stay focused. Pair it with the Pomodoro timer for short, effective work intervals, and watch your productivity skyrocket."
    },
    {
      question: "What is the Pomodoro timer, and how can it help me?",
      answer:
        "The Pomodoro timer is a built-in time management tool that divides your work into focused intervals, typically 25 minutes, followed by short breaks. It’s an excellent way to maintain deep concentration while avoiding burnout. Use it alongside the website blocker to maximize productivity during each work session."
    },
    {
      question: "Does Ashdeck protect my privacy?",
      answer:
        "Absolutely. At Ashdeck, we prioritize your privacy. We don’t monitor, track, or share your data—it stays secure on your device. The websites you block and your timer preferences are completely private, even if you’re part of a team using Ashdeck."
    },
    {
        question: "Can I use Ashdeck across multiple devices?",
        answer: "Ashdeck is designed to be easily accessible wherever you’re working, as long as you’re using the Chrome browser. Install the extension on any device with Chrome, and enjoy the same powerful features, including the website blocker, free website blocker, and Pomodoro timer."
    },
    {
        question: "Who is Ashdeck best suited for?",
        answer: "Ashdeck is perfect for anyone who wants to stay focused and boost productivity. Whether you’re a marketer eliminating distractions, a writer staying in the flow, an entrepreneur strategizing your next big move, or someone with ADHD looking for structure, Ashdeck’s tools are here to help."
    },
    {
      question: "How do I install and use Ashdeck as a Chrome extension?",
      answer: <div>
                <p>To get started with Ashdeck:</p>
                <ol className="list-decimal ml-12 mt-4 flex flex-col gap-4">
                  <li>
                    <label className="font-semibold text-gray-950">Install the Ashdeck Chrome extension</label>: Visit the Chrome Web Store and search for
                    <span className="font-semibold text-gray-950">"Ashdeck."</span> Click <span className="font-semibold text-gray-950">"Add to Chrome"</span>, then confirm by selecting <span className="font-semibold text-gray-950">"Add Extension."</span>
                  </li>

                  <li>
                    <label className="font-semibold text-gray-950">Pin the extension</label>: After installation, click the puzzle piece icon (Extensions) in your
                    Chrome toolbar. Find <span className="font-semibold text-gray-950">"Ashdeck"</span> in the list and click the pin icon to keep it visible in
                    your browser.
                  </li>
                  <li>
                    <label className="font-semibold text-gray-950">Start using Ashdeck</label>: Click the Ashdeck icon to open the extension. From there, set
                    up your <span className="font-semibold text-gray-950">website blocker</span> by selecting sites to block, or activate the <span className="font-semibold text-gray-950">Pomodoro timer</span>
                    for focused work sessions.
                  </li>
                </ol>
              </div>
    }
  ];

  const hero = {
      headline: "Block Distractions and Boost Focus Instantly with Website Blocker",
      detail: "Struggling to stay productive with endless tabs and distractions? Ashdeck’s website blocker and Pomodoro timer help you focus on what matters most—whether it’s finishing a project, studying for exams, or finally hitting those deadlines. —because, let’s face it, procrastination isn’t getting the job done.",
      mobile_details: "Too many tabs? Ashdeck helps you focus by blocking distractions. Get more done."
  }

  const cta = {
    headline: "It’s Time to Turn your To-Do List into a Done List.",
    detail: "Ashdeck helps you block the noise, stay on track, and accomplish your goals. Whether it's work, school, or your projects, you’ve got the tools to make it happen. you’ll finally have the power to take back your time and turn focus into your superpower. Get ready to see what you can achieve."
  }

  const features = [
		{
			title: "Overcome the Tab Temptation",
			icon: "🛑",
			description: `That urge to open "just one quick tab" is more than a habit—a reflex. Ashdeck, the free website blocker helps you silence distractions and reclaim your focus, so you stop spiraling into wasted hours.`,
		},
		{
			title: "Get More Done, Feel Accomplished",
			icon: "✅",
			description: "Ever feel like your day vanished with nothing to show for it? By blocking distractions, Ashdeck’s Pomodoro’s timer keeps you on track, turning procrastination into meaningful progress.",
		},
		{
			title: "Turn Bad Habits Into Better Ones",
			icon: "🔄",
			description: "Constant notifications and mindless scrolling leave you drained. With Ashdeck, you can build habits prioritizing focus and intention, one small step at a time.",
		},
		{
			title: "Take Control of Your Attention",
			icon: "🎯",
			description: "It’s exhausting to feel controlled by distractions. Ashdeck’s website blocker gives you the power to break free, helping you work purposefully and feel fulfilled at the end of the day",
		},
	]

  const how_it_works = {
    features: features,
    title: "Do You Work or Study on Your Computer?",
    details: "If so, you know the struggle. The constant pull of news, social media, shopping, or emails is relentless. Before you know it, you've drifted off-task, wasted hours, and ended the day feeling unproductive and unfulfilled. Sound familiar?"
  }

const for_who = [
  {
    title: "Students",
    description: "Accelerate your academic journey and achieve top grades while saving time and money.",
    image: <img className={"w-[30%] absolute"} src={"/images/student.png"} alt={""} />,
    emoji: "🎓"
  },
  {
    title: "Developers",
    description: "Dive deep into your work without interruptions and deliver your best code yet.",
    image: <img className={"w-[35%] absolute"} src={"/images/pc.png"} alt={""} />,
    emoji: "💻"
  },
  {
    title: "Marketers",
    description: "Cut through the noise with focus tools that let you block distractions. Stay ahead of the competition by using a website blocker to zero in on what drives results.",
    image: <img className={"w-[25%] absolute"} src={"/images/megaphone.png"} alt={""} />,
    emoji: "📢"
  },
  {
    title: "Writers",
    description: "Unleash your creativity uninterrupted. A free website blocker helps you stay in your flow, so you can craft your best work with no distractions.",
    image: <img className={"w-[40%] absolute"} src={"/images/papers.png"} alt={""} />,
    emoji: "✍️"
  },
  {
    title: "Entrepreneurs",
    description: "Strategize smarter. Use focus techniques like the Pomodoro timer to make every minute count, and watch your business thrive like never before.",
    image: <img className={"w-[25%] absolute"} src={"/images/coin.png"} alt={""} />,
    emoji: "🚀"
  },
  {
    title: "Freelancers",
    description: "Take control of your workload. With tools like a website blocker, balance productivity and freedom—your time is yours to own.",
    image: <img className={"w-[20%] absolute"} src={"/images/freelancer.png"} alt={""} />,
    emoji: "🧑‍💻"
  },
  {
    title: "Designers",
    description: "Bring your ideas to life in a space free of interruptions. Whether it’s using a Pomodoro timer or blocking distractions, create without limits.",
    image: <img className={"w-[25%] absolute"} src={"/images/palette.png"} alt={""} />,
    emoji: "🎨"
  },
  {
    title: "Researchers",
    description: "Focus deeply, discover boldly. A free website blocker can help you stay in the zone and achieve the breakthroughs you aim for.",
    image: <img className={"w-[25%] absolute"} src={"/images/researcher.png"} alt={""} />,
    emoji: "🔬"
  },
  {
    title: "For those with ADHD",
    description: "Your mind is brilliant. A little structure—like a website blocker or Pomodoro timer—can help you channel your energy and own your day.",
    image: <img className={"w-[25%] absolute"} src={"/images/adhd2.png"} alt={""} />,
    emoji: "🧠"
  }
];


	return (
		<main className={"flex flex-col bg-white dark:bg-bg-dark"}>
			<HeroSection details={hero.detail} headline={hero.headline} mobile_details={hero.mobile_details} />
			<HowItWorksSection featured_items={how_it_works.features} title={how_it_works.title} details={how_it_works.details} />
			<ForWhoSection forWhoItems={for_who} />
			<SecuritySection />
			<FAQSection faqItems={faqItems} />
			<CtaSection headline={cta.headline} detail={cta.detail} />
		</main>
	)
}

export default HomePage
