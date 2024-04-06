import React from "react"
import useUserStore from "@store/userStore"
import Logo from "@commons/components/Logo"
import CustomButton from "@commons/components/CustomButton"
import { PuzzlePieceIcon } from "@heroicons/react/16/solid"

type Props = {
	className?: string
} & React.PropsWithChildren

const HeaderLayout = ({ className = "" }: Props) => {

	const { user } = useUserStore()


	return (
		<div className={"p-8 z-50 w-full flex bg-secondary items-center justify-between h-[10vh] sticky top-0"}>
			<Logo className={"text-white font-outfit"} />

			<div className="">
				<CustomButton endIcon={<PuzzlePieceIcon className={""} />}>
					Install Extension
				</CustomButton>
			</div>

		</div>
	)
}

export default HeaderLayout
