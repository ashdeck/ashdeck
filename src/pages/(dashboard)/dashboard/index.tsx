import useUserStore from "@store/userStore"
import QuickActions from "@src/pages/(dashboard)/dashboard/_components/QuickActions"
import HeroView from "@src/pages/(dashboard)/dashboard/_components/HeroView"
import BlockLists from "@src/pages/(dashboard)/dashboard/_components/BlockLists"
import Sessions from "@/src/pages/(dashboard)/dashboard/_components/Sessions/Sessions"
import { Logout, Setting2, ShieldSecurity, WristClock } from "iconsax-react"
import { ChartBarIcon } from "@heroicons/react/24/outline"
import DashboardSideBar from "./_components/Sidebar"

function LoginPage({}) {

	const { user } = useUserStore()


	return (
		<div className={"bg-gray-300 w-full h-full min-h-screen flex flex-col"}>

			<div className="flex flex-col md:flex-row gap-8 py-8 px-16 md:p-24">
				<DashboardSideBar />

				<BlockLists blockLists={[]} className={"w-full md:w-[40%]"} />

				<Sessions className={"w-full md:w-[40%]"} />
			</div>

		</div>
	)
}

export default LoginPage
