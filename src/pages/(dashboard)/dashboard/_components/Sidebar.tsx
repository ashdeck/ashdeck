import { Logout, Setting2, ShieldSecurity, WristClock } from "iconsax-react"
import { ChartBarIcon } from "@heroicons/react/24/outline"
import Link from "@/src/commons/router/link"
import SettingsModal from "./settings/settings"
import { useState } from "react"


export default function DashboardSideBar(){
	const [showEditDialog, setShowEditDialog] = useState<{
		show: false,
		main_settings: true
	}>({
		show: false,
		main_settings: true
	})

    return (
        <div className="hidden sm:flex flex-col justify-between bg-gray-300 shadow-gray-500 shadow-lg rounded-lg w-full md:max-w-[20rem] max-h-[450px]">
			{/* <SettingsModal options={showEditDialog} setOptions={setShowEditDialog} /> */}
			<div className="px-4 mt-8 mx-2 gap-2 flex flex-col w-full">
				<Link href="/dashboard">
					<div className="bg-opacity-80 flex gap-2 items-center rounded-md px-2 py-2 w-full cursor-pointer">
						<ShieldSecurity className="w-6 h-6 text-primary" />
						<p className=" text-black font-semibold text-lg">Block Sites</p>
					</div>
				</Link>

				<Link href="/dashboard/focus_mode">
					<div className="flex gap-2 items-center rounded-md px-2 py-2 w-full cursor-pointer">
						<WristClock className="w-6 h-6 text-primary" />
						<p className=" text-black font-semibold text-lg">Focus Mode</p>
					</div>
				</Link>

				<div className="flex gap-2 items-center rounded-md px-2 py-2 w-full cursor-pointer hidden">
					<ChartBarIcon className="w-6 h-6 text-primary" />
					<p className=" text-black font-semibold text-lg">Insights</p>
				</div>
				<Link href="/dashboard/settings">
					<div className="flex gap-2 items-center rounded-md px-2 py-2 w-full cursor-pointer">
						<Setting2 className="w-6 h-6 text-primary" />
						<p className=" text-black font-semibold text-lg">Settings</p>
					</div>
				</Link>
			</div>
				<div className="px-4 mb-8 mx-2 gap-2 flex flex-col w-full">
					<div className="flex gap-2 items-center rounded-md px-2 py-2 w-full cursor-pointer hover:scale-105 hover:duration-150">
						<Logout className="w-6 h-6 text-red-500" />
						<p className=" text-black font-semibold text-lg">Logout</p>
					</div>
				</div>
		</div>
    )
}