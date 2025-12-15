import HeaderLayout from "@commons/components/layouts/Header.layout"
import FooterLayout from "@commons/components/layouts/Footer.layout"
import { Outlet } from "react-router-dom"
import { ClassNames } from "@emotion/react"

function DashboardLayout({ children }) {
	const current_location = window.location.href;
  	const contains_dashboard = current_location.includes("dashboard")
	return (
		<div className="relative min-h-screen">
		{!contains_dashboard &&	<div className="text-center text-md font-medium bg-black text-white py-4 md:py-8 [word-spacing:0.1rem] px-8 sticky top-0 z-50">
				<p>
					<span className="font-bold">🎉 LIFETIME Offer!</span> Pay once and user forever. Get Ashdeck Pro for <span className="font-semibold">$65</span> 
					(was $150) using code <span className="underline font-semibold">ASHDECKOFFER360</span>. 
					⏳ Offer ends December 31st. 
					<a href="" className="underline font-semibold"> Buy now — use forever! </a> 🔥
				</p>
			</div>}
			{!contains_dashboard && <HeaderLayout />}
			<div className="h-full">{children ? children : <Outlet />}</div>
			{!contains_dashboard && <FooterLayout />}
		</div>
	)
}

export default DashboardLayout
