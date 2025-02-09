import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import Link from "@router/link"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import AddToChrome from "@/src/commons/components/AddToChrome"
import LockAnimation from "../../../../../src/commons/assets/anim/lock-animation.json";
import Lottie from "react-lottie-player";


type Props = {
	className?: string
}

const SecuritySection = ({ className }: Props) => {
	return (
		<div
			className={"flex flex-col h-fit w-full items-center gap-4 md:gap-6 lg:gap-12 mb-36 px-[5%] md:px-[15%]"}>

			<div className=" flex items-center justify-center flex-col">
				<Lottie
				className="h-20 w-20 md:h-40 md:w-40"
				play
				segments={[45, 150]}
				animationData={LockAnimation}
				>
				</Lottie>

				<HeadingText className="text-centermax-w-[90%]  md:max-w-[40rem] text-2xl md:3xl lg:text-5xl drop-shadow-2xl shadow-primary">
					Our Dedication to Your Privacy
				</HeadingText>
				</div>

			<p className={"max-w-[90%] md:max-w-[80%] md:text-md lg:text-lg text-gray-600 text-center"}>
				At Ashdeck, protecting your privacy is our priority. We don’t monitor, track, or share your
                data, ensuring it stays securely on your device.
                Only you have control over what you choose to block and when—this information remains
                invisible to everyone, including your Team Administrator.
			</p>

		<div className="flex gap-6">
			<div className="flex items-center justify-center md:block text-center w-full">
				<div className="mx-auto w-full flex justify-center">
                    <AddToChrome />
                </div>
			</div>
		</div>

		</div>
	)
}


export default SecuritySection
