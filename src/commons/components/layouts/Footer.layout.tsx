import React from "react"
import Link from "@router/link"
import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { SlSocialPintarest, SlSocialGithub } from "react-icons/sl";


type Props = {
	className?: string
} & React.PropsWithChildren

const FooterLayout = ({ className = "" }: Props) => {
	const socials = [
		{icon: <SlSocialGithub />, url: "https://github.com/ashdeck"},
		{icon: <TiSocialLinkedin />, url: "https://www.linkedin.com/company/ashdeck"},
		{icon: <SlSocialPintarest />, url: "https://www.pinterest.com/Ashdeckhq/"},
		{icon: <TiSocialTwitter />, url: "https://x.com/Ashdeckhq"}
	]

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
				<div className="gap-8 w-[90%] mt-8 items-center justify-center">
					<div className="flex justify-center items-center gap-2 flex-col md:flex-row">
						<p className="text-gray-500 text-sm order-last md:order-1 mx-[10%] md:mx-0 text-center">Proudly Owned by Ashdeck Analytics Limited</p>
						<img src="/images/ashdeck-logo-2.png" className="w-24" alt="Ashdeck Logo" />
					</div>
				</div>

				<div className="mt-5 flex justify-center gap-8">
					<a href="https://www.toolpilot.ai" target="_blank">
						<img src="/images/toolpilot.png" alt="featured-on-tool-pilot" width={150} />
					</a>

					<a title="ai tools code.market" href="https://code.market?code.market=verified"><img alt="ai tools code.market" title="ai tools code.market" src="https://code.market/assets/manage-product/featured-logo-bright.svg" /></a>

				</div>

				<div className="w-full h-full grid grid-cols-2 place-items-center md:flex justify-center gap-4 p-8 pb-4 text-sm flex-col md:flex-row items-center">

					{
						links.map((item, index) => (
							<Link
								href={item.href}
								className="text-gray-400 hover:text-primary">
								{item.name}
							</Link>))
					}


				</div>

				<div className="flex text-2xl pb-4 gap-4 text-primary">{socials.map(social => <div className="hover:scale-125 hover:duration-150"><Link href={social.url} target="blank">{social.icon}</Link></div>)}</div>


				<div className="text-gray-500 mb-3 text-xs">
					Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
				</div>
			</div>
		</div>
	)
}

export default FooterLayout
