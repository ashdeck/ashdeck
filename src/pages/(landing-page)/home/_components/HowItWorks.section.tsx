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
			title: "Website blocker, Maximum Results",
			description: "Effectively control your online distractions with our website blocker tool. Customize your blocklist to effortlessly block websites and unblock sites, including those notorious time-wasters. With our site blocker, you can even opt for a focused mode, restricting access to the entire web except for approved sites.",
		},
		{
			title: "Customize Your Schedule for Website Blocking",
			description: "Define your schedule and rules by specifying the days and times for block sites ensuring you stay focused during designated times. Say goodbye to distractions and hello to enhanced productivity with our intuitive site blocker.",
		},
		{
			title: "Sync Website Blocker Across All Devices",
			description: "Our seamless sync feature ensures that your blocked sites and apps remain consistent across all your devices, keeping distractions at bay whether you're at your desk or on the go.",
		},
		{
			title: "Tailored to Your Needs",
			description: "Create a personalized block page to serve as a gentle reminder of your goals and redirect blocked sites to a custom URL of your choice. With Website blocker, staying focused has never been more personalized.",
		},
	]

	return (
		<div id={"how-it-works"}
			 className={"flex flex-col w-full gap-4 min-h-[100vh] px-[15%] justify-center items-center"}>

			<HeadingText className="mt-[10%] max-w-[80%] w-fit text-5xl text-center">
				Are distracting websites eating away at your precious time?
			</HeadingText>

			<p className={"w-full text-gray-600 md:max-w-[60%] text-center"}>
				It's time to regain control and focus. Our powerful website blocker features puts you back in the driver's seat, allowing you to effortlessly block time-wasting sites, games, and applications.
			</p>

			<CustomButton variant={"text"} endIcon={<ArrowUpRightIcon />}>
				Start for FREE
			</CustomButton>


			<div className="grid grid-cols-2 gap-6 w-full my-[10%]">

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
				<div className={"font-heading font-medium text-2xl"}>
					0{index + 1}.{" "}{item?.title}
				</div>

				<p className={"text-sm my-4"}>
					{item?.description}
				</p>
			</div>


			<Link href={"/dashboard"}>
				<CustomButton className={"mt-20"} variant={"text"} endIcon={<ArrowUpRightIcon />}>
					Start Blocking
				</CustomButton>
			</Link>

		</div>
	)
}
