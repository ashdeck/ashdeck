import useUserStore from "@store/userStore"
import { ChatBubbleLeftIcon, PlayIcon } from "@heroicons/react/24/solid"
import CustomButton from "@commons/components/CustomButton"
import DropdownSelect from "@commons/components/DropdownSelect"
import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "@utils"
import { api } from "@utils/axiosProvider"
import { IBlockList } from "@interfaces"

function Popup({}) {

	const { user } = useUserStore()

	const { data = [], refetch } = useQuery({
		queryKey: [QUERY_KEYS.block_lists],
		queryFn: () => api.get("/blocklists").then((res) => res.data),
	})

	const [selectedBlockList, setSelectedBlockList] = useState<IBlockList>(data[0])

	const screens = [
		{
			name: "Home",
			id: "home",
			icon: <PlayIcon className={"w-7 h-7"} />,
			active: true,
		},
		{
			name: "Chat",
			id: "chat",
			icon: <ChatBubbleLeftIcon className={"w-7 h-7"} />,
			active: true,
		},
	]

	return (
		<div className="h-screen flex-col justify-between relative">

			<div className="h-[10%] border border-outline px-6 text-black">
				<p className="font-outfit  my-4 capitalize">Hello {user?.name}</p>

			</div>


			<div className="text-secondary flex p-6 h-[75%] w-full flex-col gap-3 items-center justify-center">

				<DropdownSelect
					className="z-50"
					items={data}
					prompt="Select item"
					label="Choose blocklist for this session"
					labelClassName="text-center"
					itemLabelKey="name"
					selected={selectedBlockList}
					setSelected={setSelectedBlockList}
				/>

				<CustomButton startIcon={<PlayIcon className={"text-white"} />} className={"py-4 w-full"}>
					Start Focus Session
				</CustomButton>

				<div className="w-full h-[1px] my-8 bg-outline"></div>

				<p>
					Want to further customize your focus session?
					Visit the <a href="#" className="text-primary">dashboard</a>
				</p>


			</div>

			<div className="h-[15%] flex justify-between border border-outline px-6 text-black w-full">

				{

					screens
						?.filter((screen) => screen.active === true)
						.map((screen, index) => (
							<div onClick={() => {
							}} key={index}
								 className="w-full gap-2 text-secondary cursor-pointer flex flex-col items-center justify-center">
								{screen.icon}
								{/*<p className="text-xs">{screen.name}</p>*/}

							</div>
						))

				}

			</div>

		</div>
	)

}

export default Popup
