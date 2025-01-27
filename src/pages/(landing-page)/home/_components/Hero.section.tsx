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
			className={"flex flex-col bg-secondary py-24 lg:py-0 lg:h-[90vh] w-full items-center gap-8 relative px-[10%] md:px-[15%] justify-center"}>
			<HeroBgPattern className={"w-full absolute"} />

			<div className="items-center flex flex-col">
				<HeadingText className="text-center text-white lg:mt-[12rem] md:text-4xl lg:text-6xl text-3xl font-bold">
					Block Distractions and Boost Focus Instantly with Website Blocker
				</HeadingText>
				<PenUnderline className={"w-[50%] stroke-3 mx-auto"} />
			</div>


			<p className={"max-w-[80%] md:text-md lg:text-lg text-center text-gray-300 hidden sm:block"}>
				Struggling to stay productive with endless tabs and distractions? Ashdeck’s website blocker
				and Pomodoro timer help you focus on what matters most—whether it’s finishing a project,
				studying for exams, or finally hitting those deadlines. —because, let’s face it, procrastination
				isn’t getting the job done.
			</p>

			<Link className={"w-[14rem]"} href={"/join-our-waitlist"}>
				<CustomButton className={"py-3.5 px-6 w-full"}>
					Join Waitlist
				</CustomButton>
			</Link>

			<div className="flex w-full bg-primary opacity-0 min-h-[20%]">

			</div>

		</div>
	)
}


export default HeroSection
