import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "@router/link"
import AddToChrome from "@/src/commons/components/AddToChrome"


type Props = {
	className?: string
}


const HowItWorksSection = ({ className }: Props) => {

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

	return (
		<div id={"how-it-works"}
			className={"flex flex-col w-full gap-4 min-h-[100vh] px-[5%] md:px-[15%] justify-center items-center"}>

			{/* <HeadingText className="mt-[10%] max-w-[80%] w-fit text-5xl text-center">

				Are distracting websites eating away at your precious time?
			</HeadingText> */}

			<h2 className="mt-[10%] max-w-[90%] md:max-w-[80%] w-fit text-2xl md:text-3xl lg:text-5xl text-center">Do You Work or Study on Your Computer?
			</h2>

			<p className={"w-full text-gray-600 md:max-w-[60%] text-center text-lg"}>
				If so, you know the struggle. The constant pull of news, social media, shopping, or emails is relentless. Before you know it, you've drifted off-task, wasted hours, and ended the day feeling unproductive and unfulfilled. Sound familiar?
			</p>

			{/* <CustomButton variant={"text"} endIcon={<ArrowUpRightIcon />}>
				Start for FREE
			</CustomButton> */}

			<div className="mx-auto w-full flex justify-center mt-4">
				<AddToChrome />
			</div>


			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full my-[10%]">

				{
					features.map((item, i) => <FeatureCard item={item} index={i} />)
				}

			</div>


		</div>
	)
}


export default HowItWorksSection


const FeatureCard = ({ item, index = 0 }) => {
	return (
		<div className={"flex bg-[#eff9f1] dark:bg-bg-dark-50 justify-between rounded-br-[40%] border border-bg-50 dark:border-bg-dark-50 transition duration-500 hover:border-primary w-full flex-col gap-2 py-10 px-8 md:px-16"}>
			<div className="flex flex-col">
				<h3 className={"font-heading font-semibold text-xl"}>
					{item?.icon}{" "}{item?.title}
				</h3>

				<p className={"text-sm my-4"}>
					{item?.description}
				</p>
			</div>


			<Link href={"https://chromewebstore.google.com/detail/ashdeck/ahdbmagpbepplcdlfodgilcljafooimc"} className="w-[16rem]">
				<CustomButton className={"mt-20"} variant={"text"} endIcon={<ArrowUpRightIcon />}>
					Add to Chrome
				</CustomButton>
			</Link>

		</div>
	)
}
