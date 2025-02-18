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
      detail: "Struggling to stay productive with endless tabs and distractions? Ashdeck’s website blocker and Pomodoro timer help you focus on what matters most—whether it’s finishing a project, studying for exams, or finally hitting those deadlines. —because, let’s face it, procrastination isn’t getting the job done."
  }

	return (
		<main className={"flex flex-col bg-white dark:bg-bg-dark"}>
			<HeroSection details={hero.detail} headline={hero.headline} />
			<HowItWorksSection />
			<ForWhoSection />
			<SecuritySection />
			<FAQSection faqItems={faqItems} />
			<CtaSection />
		</main>
	)
}

export default HomePage
