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
      question: "What is a website blocker and how does it improve productivity?",
      answer:
        "A website blocker is a tool that restricts access to specific websites, helping you stay focused and reduce distractions. By blocking time-wasting sites, you can concentrate better on your tasks, ultimately boosting productivity."
    },
    {
      question: "What is a focus mode?",
      answer:
        "Focus Mode is a feature designed to help you achieve deep concentration by eliminating distractions. With one click, you can remove digital noise, sync with your flow state, and focus on your top task with sustained and relaxed attention."
    },
    {
      question: "What are focus sounds ? and how do they help?",
      answer:
        "Soundscapes are natural ambient sounds that you can play while working to help you focus. Whether it’s the sound of a coffee shop, beach waves, or relaxing rain, these soundscapes are designed to create a productive environment and drown out distractions."
    },
    {
      question: "What is Ashdeck’s AI Notepad?",
      answer:
        "AI-powered notepad is designed to help you focus and boost your productivity. It's simple to use, yet packed with features that allow you to brainstorm, outline, and create content with ease. The AI capabilities help you refine ideas, generate journaling prompts, and even assist in your creative process."
    },
    {
      question: "How can I customise the blocklist in Ashdeck's website blocker?",
      answer:
        "You can easily customise the blocklist by adding or removing websites according to your preferences. Ashdeck allows you to block notorious time-wasting sites andeven restrict access to the entire web except for approved sites in focused mode."
    },
    {
        question: "Can I set specific times for blocking websites with Ashdeck?",
        answer: "Yes, Ashdeck allows you to define your schedule by specifying the days and times for blocking websites. This ensures you stay focused during designated times, enhancing your productivity."
    },
    {
        question: "What sets Ashdeck apart from competitors?",
        answer: "Ashdeck stands out with its customizable blocklists, Focus Mode for restricted access, and a personalised dashboard that enhances your new tab with weather updates, motivational quotes, meditative sounds, AI notepad and a to-do list. Its intuitive schedule settings create distraction-free periods, making it ideal for students, professionals, and creatives on any major browser."
    },
    {
        question: "What features does the personalised dashboard offer in Ashdeck?",
        answer: "Ashdeck's personalised dashboard turns your new tab into an inspiring and productive workspace. It includes real-time weather updates, stunning backgrounds, a to-do list, natural meditative sounds, and motivational quotes. Additionally, with AI notepad, you can leverage AI tools to brainstorm, outline, refine, and create content. The dashboard helps you stay on top of your progress, track your goals, and enhance your productivity."
    },
    {
        question: "Is Ashdeck's website blocker compatible with all major browsers?",
        answer: "Yes, Ashdeck is compatible with major browsers including Chrome, Firefox, Microsoft Edge, and Safari. You can easily install and use it on your preferred browser to start improving your focus and productivity."
    },
    {
        question: "Is the code open-source?",
        answer: "Yes! You can see the source code in our GitHub repo."
    },
    {
        question: "Do you take feature requests?",
        answer: "Yes! Post an issue on GitHub or email us. We're happy to hear how we can improve your email experience."
    }
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
