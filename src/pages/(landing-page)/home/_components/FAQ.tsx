import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"; // Import icons

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  className?: string;
  faqItems?: FAQItem[]
};

const FAQSection = ({ className, faqItems }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Manage active state

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div
      id="faq"
      className={`w-full px-[5%] md:px-[15%] py-16 flex flex-col gap-6 ${className}`}
    >
      <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-semibold">
        Frequently Asked Questions
      </h2>

      <div className="w-full max-w-5xl lg:max-w-[90rem] mx-auto">
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
