import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"; // Import icons

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  className?: string;
};

const FAQSection = ({ className }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Manage active state

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    // {
    //     question: "What features does the personalised dashboard offer in Ashdeck?",
    //     answer: "Ashdeck's personalised dashboard turns your new tab into an inspiring and productive workspace. It includes real-time weather updates, stunning backgrounds, a to-do list, natural meditative sounds, and motivational quotes. Additionally, with AI notepad, you can leverage AI tools to brainstorm, outline, refine, and create content. The dashboard helps you stay on top of your progress, track your goals, and enhance your productivity."
    // },
    // {
    //     question: "Is Ashdeck's website blocker compatible with all major browsers?",
    //     answer: "Yes, Ashdeck is compatible with major browsers including Chrome, Firefox, Microsoft Edge, and Safari. You can easily install and use it on your preferred browser to start improving your focus and productivity."
    // },
    // {
    //     question: "Is the code open-source?",
    //     answer: <div>"Yes! You can see the source code in our <a className="cursor-pointer text-primary-dark font-semibold" href="https://github.com/ashdeck/ashdeck_ui" target="_blank">GitHub repo</a>."</div>
    // },
    // {
    //     question: "Do you take feature requests?",
    //     answer: <div>Yes! Post an issue on <a className="cursor-pointer text-primary-dark font-semibold" href="https://github.com/ashdeck/ashdeck_ui" target="_blank">GitHub</a> or email us. We're happy to hear how we can improve your email experience.</div>
    // }
  ];

  return (
    <div
      id="faq"
      className={`w-full px-[5%] md:px-[15%] py-16 flex flex-col gap-6 ${className}`}
    >
      <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-semibold">
        Frequently Asked Questions
      </h2>

      <div className="w-full max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-md lg:text-lg font-medium text-primary-dark border-b-2"
            >
              <div className="text-left max-w-[90%]">
                {item.question}
              </div>
              {activeIndex === index ? (
                <ChevronUpIcon className="w-6 h-6" />
              ) : (
                <ChevronDownIcon className="w-6 h-6" />
              )}
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">{item.answer}</div>
              // item.anser
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
