import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import HeroBgPattern from "@commons/assets/images/hero-bg-pattern.svg?react"
import Link from "@router/link"
import PenUnderline from "@commons/assets/images/pen-underline.svg?react"
import AddToChrome from "@/src/commons/components/AddToChrome"

type Props = {
	className?: string
}

const HeroSection = ({ className }: Props) => {
	return (
		<div
			className={"flex flex-col bg-[#eff9f1] py-24 lg:py-0 lg:h-[90vh] w-full items-center gap-8 relative px-[10%] md:px-[15%] justify-center"}>
			<HeroBgPattern className={"w-full absolute"} />

			<div className="items-center flex flex-col">
				<HeadingText className="text-center text-[#071a37] lg:mt-[12rem] md:text-4xl lg:text-6xl text-3xl font-bold">
					Block Distractions and Boost Focus Instantly with Website Blocker
				</HeadingText>
				<PenUnderline className={"w-[50%] stroke-3 mx-auto"} />
			</div>


			<p className={"max-w-[80%] md:text-md lg:text-lg text-center text-[#4d4c4d] hidden sm:block"}>
				Struggling to stay productive with endless tabs and distractions? Ashdeck’s website blocker
				and Pomodoro timer help you focus on what matters most—whether it’s finishing a project,
				studying for exams, or finally hitting those deadlines. —because, let’s face it, procrastination
				isn’t getting the job done.
			</p>

			<AddToChrome />

			<div className="flex w-full bg-primary opacity-0 min-h-[20%]">

			</div>

		</div>
	)
}


export default HeroSection
