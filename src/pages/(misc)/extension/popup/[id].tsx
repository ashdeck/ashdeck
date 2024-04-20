import useUserStore from "@store/userStore"
import { PlayIcon, StopIcon } from "@heroicons/react/24/solid"
import CustomButton from "@commons/components/CustomButton"
import DropdownSelect from "@commons/components/DropdownSelect"
import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { COLORS, QUERY_KEYS } from "@utils"
import { api } from "@utils/axiosProvider"
import AvatarImage from "@commons/components/AvatarImage"
import { Activity, IconProps, TimerStart } from "iconsax-react"
import FormInput from "@commons/components/FormInput"
import useExtensionStore from "@store/extensionStore"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"

function Popup({}) {

	const { user } = useUserStore()
	const { activeScreen, setActiveScreen } = useExtensionStore()


	const { setSelectedBlockList, setBlockLists } = useExtensionStore()

	const { data = [], refetch } = useQuery({
		queryKey: [QUERY_KEYS.block_lists],
		queryFn: () => api.get("/blocklists").then((res) => res.data),
	})

	useEffect(() => {
		if (data && data?.length > 0) {
			setSelectedBlockList(data[0])
			setBlockLists(data)
		}
	}, [data])


	const iconProps: IconProps = {
		size: 24,
		color: COLORS.primary,

	}

	const screens = [
		{
			name: "Home",
			id: "home",
			icon: <Activity {...iconProps} />,
			active: true,
		},
		{
			name: "Chat",
			id: "chat",
			icon: <TimerStart {...iconProps} />,
			active: true,
		},
	]

	const renderScreen = () => {
		switch (activeScreen) {
			case 0:
				return <SetupScreen />
			case 1:
				return <SessionScreen />
			default:
				return <SetupScreen />
		}
	}
	return (
		<div className="h-screen flex-col justify-between relative">

			<div className={`h-[10%]  border border-outline px-6 text-black flex items-center justify-between ${activeScreen === 0 ? "bg-secondary text-white" : ""}`}>
				<p className="font-outfit  my-4 capitalize">Website Blocker</p>

				<AvatarImage className={"w-8"} />
			</div>

			<div className="h- h-[75%]">
				{renderScreen()}
			</div>

			<div className="h-[15%] gap-4 bg-secondary flex justify-between border border-outline px-6 text-black w-full">

				{

					screens
						?.filter((screen) => screen.active === true)
						.map((screen, index) => (
							<div onClick={() => setActiveScreen(index)} key={index}
								 className="w-full gap-2 text-secondary cursor-pointer flex flex-col items-center justify-center">
								<span className={`w-fit h-fit p-4 flex items-center justify-center rounded-xl ${activeScreen === index ? "bg-accent-primary" : ""}`}>
									{screen.icon}
								</span>
							</div>
						))

				}

			</div>

		</div>
	)

}

export default Popup

const SessionScreen = ({}) => {

	const [loading, setLoading] = useState(false)

	const { selectedBlockList, setSelectedBlockList, blockLists } = useExtensionStore()


	let blockThisSite = () => {

	}
	return (
		<div className="text-secondary flex p-6 h-full w-full flex-col gap-3 items-center justify-center">


			<DropdownSelect
				className="z-50"
				menuItemClassName={"w-[300px]"}
				items={blockLists}
				prompt="Select item"
				label="Choose blocklist for this session"
				labelClassName="text-center"
				itemLabelKey="name"
				selected={selectedBlockList}
				setSelected={setSelectedBlockList}
			/>

			<CustomButton loading={loading} onClick={blockThisSite} className={"py-4 w-full"}>
				Block Site
			</CustomButton>

			<div className="w-full h-[1px] my-8 bg-outline"></div>

			<p>
				Want to further customize your focus session?
				Visit the <a href="#" className="text-primary">dashboard</a>
			</p>

		</div>

	)
}


const SetupScreen = ({}) => {

	const {
		selectedBlockList,
		inSession,
		setActiveSession,
		blockLists,
		setSelectedBlockList,
		setInSession,
	} = useExtensionStore()
	const [loading, setLoading] = useState(false)

	const { register, handleSubmit } = useForm()

	const startFocusSession = (data: any) => {
		setLoading(true)

		let timeToAdd = (data?.hours * 60 * 60 * 1000) + (data?.minutes * 60 * 1000)

		console.log(data, timeToAdd)

		const payload = {
			id: "session1",
			device_id: "device1",
			user_id: "user1",
			start_time: new Date(),
			end_time: new Date(new Date().getTime() + timeToAdd),
			block_list: selectedBlockList,
		}

		api.put("/active-session", payload)
			.then(() => {
				window.parent.postMessage({ type: "startSession" }, "*")
				setActiveSession(payload)
				setInSession(true)
			})
			.catch((err) => {
				toast.error("We could not start your session.")
			})
			.finally(() => setLoading(false))

	}

	return (
		<div className={"text-white bg-secondary flex p-6 h-full w-full flex-col gap-3 items-center justify-center"}>

			{inSession ? <InSessionView /> : (
				<>
					<p>Session Duration (HH:MM)</p>

					<div className="flex items-center gap-4">
						<FormInput register={register("hours")} defaultValue={0} maxLength={2} className={"aspect-square text-center text-black text-2xl w-14"} />
						<p className={"font-bold text-4xl w-fit"}>:</p>
						<FormInput register={register("minutes")} defaultValue={30} maxLength={2} className={"aspect-square text-center text-black text-2xl w-14"} />
					</div>

					<DropdownSelect
						className="z-50 text-white"
						menuItemClassName={"w-[300px]"}
						items={blockLists}
						prompt="Select item"
						label="Choose blocklist for this session"
						labelClassName="text-center text-white"
						itemLabelKey="name"
						selected={selectedBlockList}
						setSelected={setSelectedBlockList}
					/>

					<CustomButton
						loading={loading}
						onClick={handleSubmit(startFocusSession)}
						startIcon={<PlayIcon className={"text-white"} />}
						className={"py-4 w-full"}>
						Start Focus Session
					</CustomButton>
				</>
			)}

		</div>
	)

}


const InSessionView = ({}) => {

	const { activeSession, setActiveSession, setInSession } = useExtensionStore()

	/*window.addEventListener("message", (event) => {
		if (event.data.type === "endSession") {
			setActiveSession(null)
		}
	})*/

	useEffect(() => {
		api.get("/active-session")
			.then(({ data }) => {

				if (data) {
					setActiveSession(data)
				}
			})
			.catch(() => {
			})
	}, [])


	return (
		<>
			<p>Session in progress </p>


			<CustomButton
				startIcon={<StopIcon className={"text-white"} />}
				className={"py-4 w-full bg-status-error"}>
				End Focus Session
			</CustomButton>
		</>
	)
}
