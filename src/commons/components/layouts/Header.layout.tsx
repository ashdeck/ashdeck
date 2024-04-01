import React from "react"
import useUserStore from "@store/userStore"
import Logo from "@commons/components/Logo"
import CustomButton from "@commons/components/CustomButton"

type Props = {
	className?: string
} & React.PropsWithChildren

const HeaderLayout = ({ className = "" }: Props) => {

	const { user } = useUserStore()

	return (
		<div className={"p-8 w-full flex bg-primary-dark items-center justify-between h-[10vh] sticky top-0"}>
			<Logo className={"text-white font-outfit"} />

			<div className="">
				<CustomButton>
					Install
				</CustomButton>
			</div>

		</div>
	)
}

export default HeaderLayout
