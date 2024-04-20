import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import HeroBgPattern from "@commons/assets/images/hero-bg-pattern.svg?react"
import Link from "@router/link"
import PenUnderline from "@commons/assets/images/pen-underline.svg?react"


type Props = {
	className?: string
}

const HeroSection = ({ className }: Props) => {
	return (
		<div
			className={"flex flex-col bg-secondary h-[90vh] w-full items-center gap-12 relative px-[15%]"}>
			<HeroBgPattern className={"w-full absolute"} />

			<div className="items-center flex flex-col">
				<HeadingText className="text-center text-white mt-[10%] text-7xl font-bold">
					Limit Distractions, Improve Productivity & Focus with Website Blocker
				</HeadingText>
				<PenUnderline className={"w-[50%] stroke-3 mx-auto"} />
			</div>


			<p className={"max-w-[80%] text-lg text-center text-gray-300"}>
				WebsiteBlocker, a productivity extension for Google Chrome, empowers you to maintain focus on your tasks. By limiting your access to time-wasting websites, it facilitates efficient work habits and boosts productivity.
			</p>

			<Link className={"w-[30%]"} href={"/dashboard"}>
				<CustomButton className={"py-3.5 px-6 w-full"}>
					Start for Free
				</CustomButton>
			</Link>

			<div className="flex w-full bg-primary opacity-0 min-h-[20%]">

			</div>

		</div>
	)
}


export default HeroSection
