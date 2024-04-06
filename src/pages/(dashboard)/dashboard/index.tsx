import useUserStore from "@store/userStore"
import QuickActions from "@src/pages/(dashboard)/dashboard/_components/QuickActions"
import HeroView from "@src/pages/(dashboard)/dashboard/_components/HeroView"
import BlockLists from "@src/pages/(dashboard)/dashboard/_components/BlockLists"
import SessionHistory from "@src/pages/(dashboard)/dashboard/_components/SessionHistory"

function LoginPage({}) {

	const { user } = useUserStore()


	return (
		<div className={"bg-gray-300 w-full h-full min-h-screen flex flex-col"}>


			<div className="bg-secondary text-white min-h-[30%] flex justify-between items-center p-16 gap-8">

				<HeroView />

				<QuickActions />

			</div>

			<div className="flex flex-col md:flex-row gap-8 p-16">
				<BlockLists className={"w-full md:w-[50%]"} />

				<SessionHistory className={"w-full md:w-[50%]"} />

			</div>

		</div>
	)
}

export default LoginPage
