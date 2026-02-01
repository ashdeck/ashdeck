import HeaderLayout from "@commons/components/layouts/Header.layout"
import FooterLayout from "@commons/components/layouts/Footer.layout"
import { Outlet } from "react-router-dom"
import { ClassNames } from "@emotion/react"

function DashboardLayout({ children }) {
	const current_location = window.location.href;
  	const contains_dashboard = current_location.includes("dashboard")
	return (
		<div className="relative min-h-screen">
		{!contains_dashboard &&	<div className="text-center text-md font-medium bg-black text-white py-4 md:py-8 [word-spacing:0.1rem] px-8 sticky top-0 z-50 w-full hidden">
				<p>
					<span className="font-bold">🎉 Get 35% off</span> Annual &
					Lifetime subscriptions Use code 
					<span className="font-semibold text-green-500 text-lg">
						ASHDECK35
					</span>
					.
					<span className="cursor-pointer font-semibold hover:scale-110 hover:duration-150">
						<a href="/pricing" className="">
						{"   "}
						<span className="underline">Subscribe Now!</span>{" "}
						</a>
						🔥
					</span>
                </p>
			</div>}
			{!contains_dashboard && <HeaderLayout />}
			<div className="h-full">{children ? children : <Outlet />}</div>
			{!contains_dashboard && <FooterLayout />}
		</div>
	)
}

export default DashboardLayout
