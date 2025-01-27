import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import Link from "@router/link"
import { FaGithub } from "react-icons/fa"


type Props = {
	className?: string
}

const HeroSection = ({ className }: Props) => {
	return (
		<div
			className={"flex flex-col h-fit w-full items-center gap-4 md:gap-6 lg:gap-12 pb-36 lg:pb-60 px-[5%] md:px-[15%]"}>

			<HeadingText className="text-center mt-[10%] max-w-[90%]  md:max-w-[40rem] text-2xl md:3xl lg:text-5xl drop-shadow-2xl shadow-primary">
				It’s Time to Turn your To-Do List into a Done List.
			</HeadingText>


			<p className={"max-w-[90%] md:max-w-[80%] md:text-md lg:text-lg text-gray-600 text-center"}>
				Ashdeck helps you block the noise, stay on track, and accomplish your goals. Whether it's
				work, school, or your projects, you’ve got the tools to make it happen. you’ll finally have the
				power to take back your time and turn focus into your superpower. Get ready to see what
				you can achieve.
			</p>

		<div className="flex gap-6">
			<Link className={"sm:w-[14rem] hidden sm:block"} href={"https://github.com/ashdeck/ashdeck_ui"} target="_blank">
				<CustomButton startIcon={<FaGithub color="white" size={16}/>}  variant={"secondary"} className={"py-3.5 w-full text-white"}>
					Star on Github
				</CustomButton>
			</Link>

			<Link className={"sm:w-[14rem]"} href={"/join-our-waitlist"}>
				<CustomButton variant={"primary"} className={"py-3.5 w-full text-white"}>
					Join Waitlist
				</CustomButton>
			</Link>
		</div>

		</div>
	)
}


export default HeroSection
