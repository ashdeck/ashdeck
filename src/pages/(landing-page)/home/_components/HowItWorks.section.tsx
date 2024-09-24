import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "@router/link"


type Props = {
	className?: string
}


const HowItWorksSection = ({ className }: Props) => {

	const features = [
		{
			title: "Focus Mode",
			description: "Overcome bad habits, remove distractions, and concentrate on one task at a time. Ashdeck’s Pomodoro timer helps to boost your productivity, improve focus, and achieve your desired results swiftly and efficiently",
		},
		{
			title: "Website Blocker",
			description: "Effectively control your online distractions with our website blocker tool. Customise your blocklist to block or unblock sites, including notorious time-wasters. With our site blocker, you can even opt for a focused mode, restricting access to the entire web except for approved sites.",
		},
		{
			title: "Set Your Schedule",
			description: "Define your schedule and rules by specifying the days and times for blocking sites, ensuring you stay focused during designated times. Say goodbye to distractions and hello to enhanced productivity with our intuitive site blocker.",
		},
		{
			title: "Personalized Dashboard",
			description: "Transform your new tab into an inspiring dashboard showcasing weather updates, beautiful backgrounds, a to-do list, natural meditative sounds, AI notepad and a motivational quote. Facilitate efficient work habits, track your progress and goals, and boost productivity to regain control, productivity, and focus.",
		},
	]

	return (
		<div id={"how-it-works"}
			 className={"flex flex-col w-full gap-4 min-h-[100vh] px-[15%] justify-center items-center"}>

			{/* <HeadingText className="mt-[10%] max-w-[80%] w-fit text-5xl text-center">

				Are distracting websites eating away at your precious time?
			</HeadingText> */}

			<h2 className="mt-[10%] max-w-[80%] w-fit text-2xl md:text-3xl lg:text-5xl text-center">Regain Control of Your Time with Our Website Blocker</h2>

			<p className={"w-full text-gray-600 md:max-w-[60%] text-center"}>
				Are distracting websites eating away at your precious time? Our powerful website blocker features put you back in the driver's seat, allowing you to effortlessly block time-wasting sites, games, and applications.
			</p>

			{/* <CustomButton variant={"text"} endIcon={<ArrowUpRightIcon />}>
				Start for FREE
			</CustomButton> */}

			<Link href="/join-our-waitlist">
				<CustomButton variant={"text"} endIcon={<ArrowUpRightIcon />}>
					Join Our Waitlist
				</CustomButton>
			</Link>


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
		<div className={"flex bg-bg-50 dark:bg-bg-dark-50 justify-between rounded-br-[40%] border border-bg-50 dark:border-bg-dark-50 transition duration-500 hover:border-primary w-full flex-col gap-2 py-10 px-16"}>
			<div className="flex flex-col">
				<h3 className={"font-heading font-medium text-2xl"}>
					0{index + 1}.{" "}{item?.title}
				</h3>

				<p className={"text-sm my-4"}>
					{item?.description}
				</p>
			</div>


			<Link href={"/join-our-waitlist"}>
				<CustomButton className={"mt-20"} variant={"text"} endIcon={<ArrowUpRightIcon />}>
					Join Our Waitlist
				</CustomButton>
			</Link>

		</div>
	)
}
