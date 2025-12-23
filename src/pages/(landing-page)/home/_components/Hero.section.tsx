import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import HeroBgPattern from "@commons/assets/images/hero-bg-pattern.svg?react"
import Link from "@router/link"
import PenUnderline from "@commons/assets/images/pen-underline.svg?react"
import AddToChrome from "@/src/commons/components/AddToChrome"
import { Affiliates } from "@/src/commons/components/AddToChrome"

type Props = {
	className?: string
	headline?: string
	details?: string
	mobile_details?: string
}

const HeroSection = ({ className, headline, details, mobile_details }: Props) => {
	return (
		<div
			className={"flex flex-col bg-[#eff9f1] py-24 lg:py-0 lg:h-[90vh] w-full items-center gap-6 relative px-[10%] md:px-[15%] justify-center"}>
			{/* <HeroBgPattern className={"w-full absolute"} /> */}

			<div className="items-center flex flex-col">
				<HeadingText className="text-center text-[#071a37] lg:mt-[8rem] md:text-4xl lg:text-6xl text-2xl sm:text-3xl font-bold">
					{headline}
				</HeadingText>
				<PenUnderline className={"w-[50%] stroke-3 mx-auto"} />
			</div>


			<p className={"max-w-[80%] md:text-md lg:text-lg text-center text-[#4d4c4d] hidden sm:block"}>
				{details}
			</p>

			<p className={"max-w-[80%] md:text-md lg:text-lg text-center text-[#4d4c4d] sm:hidden"}>
				{mobile_details}
			</p>

			<div className="flex gap-4 items-center justify-center">
				<AddToChrome text="Add to Chrome" />
				<Affiliates text="Join Our Affiliate Program" />
			</div>

			<div className="flex w-full bg-primary opacity-0 min-h-[20%]">

			</div>

		</div>
	)
}


export default HeroSection
