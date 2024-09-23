import React from "react"
import useUserStore from "@store/userStore"
import Logo from "@commons/components/Logo"
import CustomButton from "@commons/components/CustomButton"
import { PuzzlePieceIcon } from "@heroicons/react/16/solid"
import Link from "@router/link"

type Props = {
	className?: string
} & React.PropsWithChildren

const HeaderLayout = ({ className = "" }: Props) => {

	const { user } = useUserStore()

	const links = [
		{
			name: "Blog",
			href: "/blog",
		},
		{
			name: "Features",
			href: "#features",
		},
		{
			name: "About",
			href: "about",
		},
	]

	return (
		<div className={"p-8 z-40 w-full flex bg-secondary items-center justify-between h-[10vh] sticky top-0"}>
			<Logo className={"text-white font-outfit w-[20%] ml-8"} />

			<div className="w-full flex text-white justify-center gap-12">
				{links.map((link, index) => {
					return (
						<Link
							key={index}
							href={link.href}
							className="text-md hover:text-primary pb-2 transition duration-500 ">
							{link.name}
						</Link>
					)
				})}
			</div>

			{/* <div className="w-[20%]">
				<CustomButton endIcon={<PuzzlePieceIcon className={""} />}>
					Install Extension
				</CustomButton>
			</div> */}
				<div className="w-[20%] mr-8">
					<div className="flex justify-between">
						<div></div>
						<Link href="/join-our-waitlist">
							<CustomButton className="border-0 hover-border-0">
								Join Our Waitlist
							</CustomButton>
						</Link>
					</div>
				</div>

		</div>
	)
}

export default HeaderLayout
