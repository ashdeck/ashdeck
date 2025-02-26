export default function AboutUs(){
    return(
        <div className="max-w-[90%] sm:max-w-[70%] mx-auto flex flex-col gap-12 xl:max-w-[70%] py-20">
            <div>
                <h1 className="text-center font-semibold lg:font-bold text-2xl lg:text-3xl xl:text-4xl mb-4">About Ashdeck 🚀</h1>
                <p>
                    Ashdeck is an <span className="font-semibold text-primary"><a href="https://github.com/ashdeck/ashdeck">open-source</a></span> Chrome extension built to help you stay focused, block
                    distractions, and track your progress—so you can finally stop losing hours to mindless
                    scrolling and get things done.
                </p>
            </div>

            <div>
                <h2 className="font-semibold mb-4 text-2xl md:text-3xl">Why We Built Ashdeck</h2>
                <p>
                    At Ashdeck Analytics, we weren’t born productivity gurus (shocking, we know). As a
                    bootstrapped company, we struggled with the same things you do—procrastination, digital
                    distractions, and the never-ending battle between "just one more YouTube video" and
                    actual work. <br /> <br />

                    So, instead of accepting defeat, we built a solution. <span className="font-semibold text-primary"><a href="https://chromewebstore.google.com/detail/ashdeck-free-website-bloc/ahdbmagpbepplcdlfodgilcljafooimc">Ashdeck</a></span> was created out of
                    necessity—to help us (and now, you) work smarter, stay focused, and feel good about our
                    progress at the end of the day. <br /> <br />

                    Because let’s be real—productivity isn’t about working longer, it’s about working
                    better. Whether you’re crushing deadlines, planning long-term goals, or just trying to survive
                    a Monday morning, Ashdeck is here to help you stay intentional and in control.
                </p>
            </div>

            <div>
                <h2 className="font-semibold mb-4 text-2xl md:text-3xl">What Makes Ashdeck Your Productivity Sidekick 🦸‍♂️</h2>
                <ul className="flex flex-col gap-4">
                    <li>🔹 <span className="font-semibold">Browser-First Experience</span> – Seamlessly integrates with Chrome, staying right where
                    you work.</li>
                    <li>🔹 <span className="font-semibold">Built for Real People</span> – Designed to tackle the same struggles we all face—distractions,
                    procrastination, and the never-ending temptation of social media.</li>
                    <li>🔹 <span className="font-semibold">Designed with You in Mind</span> – Every feature is built to be simple, effective, and actually
                    helpful—because productivity tools should work for you, not against you.</li>
                </ul>
            </div>

            <div>
                <h2 className="font-semibold mb-4 text-2xl md:text-3xl">3 Simple Ways to Help Us Spread the AshDeck Love ❤️</h2>
                <ol className="flex flex-col gap-4 list-decimal mx-4">
                    <li>
                        <h3 className="font-semibold">Leave a <span className="text-primary"><a href="https://chromewebstore.google.com/detail/ashdeck-free-website-bloc/ahdbmagpbepplcdlfodgilcljafooimc">Chrome Extension Review</a></span></h3>
                        <p>
                            Think of it as a little high-five to focus. Every review helps us reach more users and yes—it makes our day (cue happy dance 💃).
                        </p>
                    </li>
                    <li>
                        <h3 className="font-semibold">Share Ashdeck with the World</h3>
                        <p>
                            Post, tweet, or casually drop it in conversations like, “I’ve been using AshDeck, and suddenly, I’m productivity royalty.” Trust us—it’s a vibe.
                        </p>
                    </li>
                    <li>
                        <h3 className="font-semibold">Rally Your Productivity Squad</h3>
                        <p>
                            Get your friends, family, or coworkers on board. Accountability squads are the new cool
                            thing—and distractions don’t stand a chance against teamwork.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h2 className="font-semibold mb-4 text-2xl md:text-3xl">We’d Love to Hear From You!💡</h2>
                <p>
                    Ashdeck is built for you, and your feedback is what makes it better. Have ideas to improve
                    it? Found a bug that needs squashing? Or maybe you’d like to contribute to our
                    open-source project? <br /><br />

                    We’d love to hear from you! Drop us a message through the extension (<span className="font-semibold">{"Settings > Leave Feedback"}</span> ) or an <span className="font-semibold">email</span> to <span className="font-semibold text-primary"><a href="mailto:promise@ashdeck.com">promise@ashdeck.com</a></span>. <br /> We read and respond to every message because your input helps shape Ashdeck into the ultimate focus tool. <br /><br />

                    Thanks for being part of this journey! 😊
                </p>
            </div>
        </div>
    )
}