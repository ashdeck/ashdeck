import "@assets/css/components.css"
import { useState } from "react"
import { SessionItem } from "../../types"
import { useEffect } from "react"
import { PlayCircleIcon, PauseCircleIcon, ShieldCheckIcon, WindowIcon, LockClosedIcon, PencilSquareIcon, ArrowUpCircleIcon } from "@heroicons/react/16/solid"
import { Arrow, ArrowUp, ArrowUp3 } from "iconsax-react"
import { ArrowUpIcon } from "@heroicons/react/24/outline"
// import { CloseCircle } from "iconsax-react"



type Props = {
	session?: SessionItem
}

const SingleCurrentSession = ({ session }: Props) => {
    const [showDetails, setShowDetails] = useState(false)
	const [isPaused, setIsPaused] = useState(false)
    useEffect(()=>{}, [showDetails])
	return (
		<div className="w-full bg-[#29a259]">
			<div onClick={()=>setShowDetails(!showDetails)} className="bg-gree text-white flex justify-between items-start py-4">
				<div>
					<p className="font-medium text-xl">{session.name}</p>
					<p className="text-xs">{session.recurring ? "Recurring": "One Time"}</p>
				</div>

				<div className="">
					<div className="flex gap-4 items-center">
						<div className={`h-4 w-4 rounded-full ${session.paused ? "bg-orange-400" :"bg-green-500"}`}></div>
						<p className="font-normal text-xl">20 minutes left</p>
					</div>
					<p className="text-right text-xs">12:00pm - 12:30am</p>
				</div>
            </div>

            <div className={`${showDetails ? "": "hidden"} text-white mt-2 border-t border-t-gray-400 w-full`}>
				<div className="flex justify-between my-4 items-start">
					<div>
						<div className="flex justify-between items-start">
							<p className="text-white w-20">Block Lists</p>
							<div className="px-2">
								{session.blockList.map(item=><div className="flex items-center gap-1">
									<ShieldCheckIcon className="h-7 w-7" />
									<p className="font-small">{item.name}</p>
								</div>)}
							</div>
						</div>
					</div>
					<div className="flex items-center cursor-pointer">
						{session.paused? <PlayCircleIcon className="h-6 w-6" />: <PauseCircleIcon className="h-6 w-6" />}
						<p className="ml-1">{session.paused ? "Resume": "Pause"}</p>
					</div>
				</div>

				<div className="mt-2 border-t border-t-gray-400 py-4">
					<div className="flex items-start">
						<p className="text-white w-20">Blocked</p>
						<div className="flex items-center gap-1">
							<WindowIcon className="h-7 w-7" />
							<p className="font-small">25 Domains</p>
						</div>
					</div>
				</div>

				<div className="mt-2 border-t border-t-gray-400 pt-4">
					<div className="flex items-start">
						<p className="text-white w-20 mr-8">Notes</p>
						<div className="flex items-center gap-1">
							{/* <WindowIcon className="h-7 w-7" /> */}
							<p className="font-small pr-8">{session.notes}</p>
						</div>
					</div>
				</div>

				<div className="border-t border-t-gray-400 mt-2 pt-4 flex justify-between">
					<div className="flex py-2">
						<PencilSquareIcon className="mr-1 h-5 w-5 text-sm"/>
						<p className="font-semibold">Edit Session</p>
					</div>
					<div className="flex py-2">
						<LockClosedIcon className="text-red-600 mr-1 h-5 w-5 text-sm"/>
						<p className="text-red-600 font-semibold">End Session</p>
					</div>
				</div>

				<div className="flex justify-between items-center mb-4">
					<div className="">
					</div>
					<div onClick={()=>setShowDetails(!showDetails)} className="">
						<ArrowUpCircleIcon className="h-8 w-8" />
					</div>
					<div className="">
					</div>
				</div>
			</div>
		</div>
	)
}


export default SingleCurrentSession
