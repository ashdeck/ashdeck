import { twMerge } from "tailwind-merge"

type Props = {
	className?: string
}

const SessionHistory = ({ className }: Props) => {
	return (
		<div className={twMerge("bg-white p-6 rounded-lg min-h-[60vh]", className)}>

			<div className="flex w-full justify-between items-center">
				<div className="flex max-w-[70%] flex-col gap-0.5">
					<p className="font-outfit text-primary-dark font-semibold capitalize text-xl">
						Session History
					</p>
					<p className="text-gray-500 dark:text-gray text-sm">
						View your past sessions
					</p>
				</div>
				{/*<div className="max-w-[30%]">
					<PlusCircleIcon className="w-8 h-8 text-primary cursor-pointer" />
				</div>*/}
			</div>


			<div className="w-full flex flex-col h-full items-center justify-center">
				<p className="text-gray-500 text-sm">
					No session from the past 30 days.
				</p>
			</div>


		</div>
	)
}


export default SessionHistory
