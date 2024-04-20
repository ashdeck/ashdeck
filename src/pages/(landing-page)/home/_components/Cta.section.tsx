import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import Link from "@router/link"


type Props = {
	className?: string
}

const HeroSection = ({ className }: Props) => {
	return (
		<div
			className={"flex flex-col h-fit w-full items-center gap-12 pb-36 px-[15%]"}>

			<HeadingText className="text-center mt-[10%] max-w-[90%] text-6xl drop-shadow-2xl shadow-primary">
				Your Success Story Starts Here!
			</HeadingText>


			<p className={"max-w-[80%] text-lg text-center"}>
				Whether you're aiming for a promotion, pursuing new opportunities, or simply craving a more balanced lifestyle, WebsiteBlocker empowers you to take charge of your time and unlock your full potential.
			</p>

			<Link className={"w-[50%]"} href={"/dashboard"}>
				<CustomButton variant={"outlined"} className={"py-3.5 w-full text-"}>
					Start Your Productivity Journey Today for Free
				</CustomButton>
			</Link>


		</div>
	)
}


export default HeroSection
