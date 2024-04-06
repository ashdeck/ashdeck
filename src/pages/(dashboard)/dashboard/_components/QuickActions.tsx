import { Add, TimerStart } from "iconsax-react"
import { COLORS } from "@utils"
import CustomButton from "@commons/components/CustomButton"
import { PlayIcon } from "@heroicons/react/24/solid"
import FormInput from "@commons/components/FormInput"

type Props = {
	className?: string
}

const QuickActions = ({ className }: Props) => {


	const quickActions = [
		{
			icon: <TimerStart variant={"Bold"} size={32} color={COLORS.primary} />,
			name: "New Project",
		},
		{
			icon: <Add variant={"Bold"} size={32} color={COLORS.primary} />,
			name: "New Task",
		},
	]


	return (
		<div className={"w-full flex flex-col"}>

			<div className="flex flex-col gap-1 my-4">
				<h2 className={"font-outfit text-xl font-semibold"}>Quick Start Focus Mode</h2>
				<h2 className={"text-gray-400 max-w-[80%]"}>
					Dive into a focused and productive session by blocking out all distractions now.
				</h2>
			</div>

			<h2 className={"text-gray-400 text-sm my-4"}>Set your timer (HH : MM)</h2>

			<div className="flex items-center gap-8 mb-4">

				<div className="flex items-center gap-4">
					<FormInput defaultValue={0} maxLength={2} className={"aspect-square text-center text-2xl w-14"} />
					<p className={"font-bold text-4xl w-fit"}>:</p>
					<FormInput defaultValue={30} maxLength={2} className={"aspect-square text-center text-2xl w-14"} />
				</div>

				<div className="flex w-full ">
					<CustomButton startIcon={<PlayIcon className={"text-white"} />} className={"py-4"}>
						Start Focus Session
					</CustomButton>
				</div>


			</div>


		</div>
	)
}


export default QuickActions


/*

{
	quickActions?.map(({ icon, name }, i) => (
		<div key={i}
			 className={twMerge("cursor-pointer bg-accent-primary p-4 m-2 rounded-md items-center flex gap-2", className)}>
			{icon}
			<h3 className={"text-white font-outfit"}>{name}</h3>
		</div>
	))
}*/
