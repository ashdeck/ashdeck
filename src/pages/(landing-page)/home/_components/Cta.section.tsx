import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import Link from "@router/link"


type Props = {
	className?: string
}

const HeroSection = ({ className }: Props) => {
	return (
		<div
			className={"flex flex-col h-fit w-full items-center gap-4 md:gap-6 lg:gap-12 pb-36 lg:pb-60 px-[15%]"}>

			<HeadingText className="text-center mt-[10%] max-w-[90%] text-2xl md:3xl lg:text-5xl drop-shadow-2xl shadow-primary">
				Your Success Story Starts Here!
			</HeadingText>


			<p className={"max-w-[60%] md:text-md lg:text-lg text-gray-600 text-center"}>
				Whether you're aiming for a promotion, pursuing new opportunities, or simply craving a more balanced lifestyle, WebsiteBlocker empowers you to take charge of your time and unlock your full potential.
			</p>

			<Link className={"w-[80%] md:w-[50%] lg:w-[40%]"} href={"/join-our-waitlist"}>
				<CustomButton variant={"primary"} className={"py-3.5 w-full text-white"}>
					Join Our Waitlist
				</CustomButton>
			</Link>


		</div>
	)
}


export default HeroSection
