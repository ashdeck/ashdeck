import "@assets/css/components.css"
import { useState } from "react"
import { SessionItem } from "../../types"


type Props = {
	sessions?: Array<SessionItem>
}

const SessionHistory = ({ sessions }: Props) => {
	return (
		<div className="relative w-full">
			{sessions ?
			<div>
				<div className="flex flex-col gap-2">{sessions.map(session=><div key={session.id} className="rounded-md cursor-pointer flex justify-between bg-[#29a259] py-4 px-4">
					<p className="text-white font-semibold">{session.name}</p>
					<p>{"25 Minutes"}</p>
				</div>)}</div>
			</div>
			: <p className="absolute left-0 right-0 ml-auto mr-auto">No session from the past 30 days.</p>}
		</div>
	)
}


export default SessionHistory
