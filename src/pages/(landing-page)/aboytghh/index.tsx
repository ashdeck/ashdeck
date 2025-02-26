import AddToChrome from "@/src/commons/components/AddToChrome"
import HeroSection from "../home/_components/Hero.section";
import { FeatureCard } from "../home/_components/HowItWorks.section";
import CTASection from "../home/_components/Cta.section";
import SecuritySection from "../home/_components/SecuritySection";

const rkt = "🚀"
export default function About(){
    const hero = {
        headline: "Ashdeck: Your Focus, Supercharged.",
        detail: "Your Productivity Sidekick That Blocks Distractions and Boosts Focus. Ashdeck is an open-source Chrome extension built to help you stay focused, block distractions, and track your progress while effortlessly achieving your goals."
    }

    const how_to_contribute = [
        {
            title: "⭐💬🎉 Leave a Chrome Extension Review",
            description: "Think of it as a little high-five to focus. Each glowing review helps us reach more users and makes our day (cue happy dance)."
        },
        {
            title: "🌍📢✨ Share Ashdeck with the World",
            description: "Post, tweet, or casually drop it in conversations like, “I’ve been using Ashdeck, and suddenly, I’m productivity royalty.” Trust us—it’s a vibe."
        },
        {
            title: "👥🚀✅ Rally Your Productivity Squad",
            description: "Bring your friends, family, or coworkers on board. Accountability squads are the new cool thing; distractions don’t stand a chance against team effort!"
        }
    ]

    const what_we_do = [
        {
            title: "Browser-First Experience",
            emoji: "🌍",
            detail: "Seamlessly integrates with Chrome, staying right where you work."
        },
        {
            emoji: "🙌",
            title: "For Real People",
            detail: "We built Ashdeck to solve our struggles, designed for anyone tired of letting distractions win."
        },
        {
            emoji: "💡",
            title: "Customer-Focused Design",
            detail: "Every decision revolves around delivering a tool you’ll love and use."
        }
    ]
    return (
        <div>
            <HeroSection details={hero.detail} headline={hero.headline} />
            <div className="flex gap-8 items-center max-w-[90%] md:max-w-[70%] xl:max-w-[80%] mx-auto my-32 flex-col">
                <div className="flex flex-col md:flex-row items-center gap-8 rounded-lg">
                    <div className="w-full md:w-1/2 justify-center hidden xl:flex bg-gradient-to-r from-secondary to-transparent rounded-lg">
                        <img
                            src="/images/no-work.png"
                            alt="No Work"
                            className="w-full max-w-[600px] h-auto"
                        />
                    </div>
                    <div className="w-full xl:w-1/2 px-4 flex flex-col justify-center xl:justify-normal gap-4 text-center xl:text-left items-center xl:items-start">
                        <h2 className="font-semibold text-[2rem]">Why We Built Ashdeck</h2>
                        <p className="text-[1rem]">
                            At Ashdeck Analytics Limited, we weren’t born productivity gurus (shocking, we know). As a scrappy, bootstrapped team of two, we struggled with the same issues you do—procrastination, digital distractions, and the eternal tug-of-war between priorities. So, we rolled up our sleeves and created Ashdeck, a tool designed to help us (and now, you) work smarter, not harder.
                            We believe productivity isn’t about squeezing in more hours. It’s about working meaningfully, with clarity and purpose. Ashdeck is here to help you stay intentional, whether chasing deadlines, planning long-term goals, or trying to survive Monday mornings.
                        </p>
                        <div className="mt-8">
                            <AddToChrome />
                        </div>
                    </div>
                </div>
            </div>

            <SecuritySection />


            <div className="max-w-[90%] md:max-w-[80%] flex flex-col items-center justify-center mx-auto gap-6 mb-32">
                <div>
                    <h2 className="font-semibold text-[1.8rem] md:text-[2.5rem] text-center max-w-[42rem]">What Makes Ashdeck your Productivity Sidekick?</h2>
                </div>
                <ul className="flex flex-col md:grid grid-cols-3 gap-12 items-start mt-4">
                    {
                        what_we_do.map(item =>
                        <li key={item.title} className="items-center text-center flex justify-center flex-col max-w-[24rem] mx-8">
                            <span className="text-4xl">{item.emoji}</span> {/* Browser Icon */}
                            <h3 className="font-semibold mb-2 text-[1.5rem] text-primary">{item.title}</h3>
                            <p>{item.detail}</p>
                        </li>
                        )
                    }
                </ul>
                <div className="mt-4">
                    <AddToChrome />
                </div>
            </div>

            <div className="max-w-[90%] md:max-w-[80%] flex flex-col items-center justify-center mx-auto gap-6 mb-32">
                <h2 className="font-semibold text-[1.8rem] md:text-[2.5rem] text-center max-w-[42rem]">3 Simple Ways to Help Us Spread the Ashdeck Love</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 mx-8 lg:mx-2">
                    {how_to_contribute.map((item, index) => (
                        <FeatureCard item={item} index={index} />
                    ))}
                </div>
                {/* <div className="mt-4">
                    <AddToChrome />
                </div> */}
            </div>

            <CTASection />


            {/* <div className="max-w-[90%] md:max-w-[80%] flex flex-col items-center justify-center mx-auto gap-6 mb-32 hidden">
                <h2 className="font-semibold text-[1.8rem] md:text-[2.5rem] text-center max-w-[42rem]">We’d Love to Hear From You!</h2>
                <p>
                    Do you have ideas to make Ashdeck even better? Use the extension (Profile > Messages > Chat with Us) to send us a message. We read and respond to every message because your input makes this tool shine.
                </p>
                <p>
                    Thanks for being part of this journey. Together, let’s conquer distractions, one blocked site at a time. 
                </p>
                <AddToChrome />
            </div> */}
        </div>
    )
}