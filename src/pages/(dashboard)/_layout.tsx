import HeaderLayout from "@commons/components/layouts/Header.layout"
import FooterLayout from "@commons/components/layouts/Footer.layout"
import { Outlet } from "react-router-dom"
import { ClassNames } from "@emotion/react"

function DashboardLayout({ children }) {
	const current_location = window.location.href;
  	const contains_dashboard = current_location.includes("dashboard")
	return (
		<div className="relative min-h-screen">
			{!contains_dashboard && <HeaderLayout />}
			<div className="h-full">{children ? children : <Outlet />}</div>
			{!contains_dashboard && <FooterLayout />}
		</div>
	)
}

export default DashboardLayout
