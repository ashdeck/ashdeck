import React from "react"
import useUserStore from "@store/userStore"

type Props = {
	className?: string
} & React.PropsWithChildren

const FooterLayout = ({ className = "" }: Props) => {

	const { user } = useUserStore()

	return (
		<div className={"w-full bg-gray-400 h-[60vh]"}>
		</div>
	)
}

export default FooterLayout
