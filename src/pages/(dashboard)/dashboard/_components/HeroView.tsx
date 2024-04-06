import AvatarImage from "@commons/components/AvatarImage"
import useUserStore from "@store/userStore"

type Props = {
	className?: string
}

const HeroView = ({ className }: Props) => {
	const { user } = useUserStore()

	return (
		<div className={"w-full flex flex-row items-center gap-4"}>

			<div className="w-[20%]">
				<AvatarImage className={"w-full"} src={user?.photo} />
			</div>

			<div className="flex flex-col w-[80%]">
				<p className={"font-outfit font-semibold capitalize text-2xl"}>{user?.name}</p>
				<p className={"text-gray-400"}>{user?.email}</p>
			</div>

		</div>
	)
}


export default HeroView
