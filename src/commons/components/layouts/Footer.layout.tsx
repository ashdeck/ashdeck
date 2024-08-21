import React from "react"
import Link from "@router/link"

type Props = {
	className?: string
} & React.PropsWithChildren

const FooterLayout = ({ className = "" }: Props) => {

	const links = [
		{
			name: "Terms of Use",
			href: "#",
		},
		{
			name: "Contact Us",
			href: "#contact",
		},
		{
			name: "Features",
			href: "#features",
		},
		{
			name: "How it works",
			href: "#how-it-works",
		},
		{
			name: "Login",
			href: "/connect",
		},
	]

	return (
		<div className={""}>
			<div className="min-h-[15vh] z-20 bg-primary-dark-alt flex flex-col items-center w-full">
				<div className="w-full h-full flex justify-center gap-4 p-8">

					{
						links.map((item, index) => (
							<Link
								href={item.href}
								className="text-gray-400 hover:text-primary">
								{item.name}
							</Link>))
					}


				</div>

				<div className="text-gray-300 my-3 text-sm">
					Proudly owned by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Pelrio Analytica</a>
				</div>

				<div className="text-gray-500 mb-3 text-xs">
					Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
				</div>
			</div>
		</div>
	)
}

export default FooterLayout
