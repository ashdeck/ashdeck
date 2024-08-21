import HeaderLayout from "@commons/components/layouts/Header.layout"
import FooterLayout from "@commons/components/layouts/Footer.layout"
import { Outlet } from "react-router-dom"
import { ClassNames } from "@emotion/react"

function DashboardLayout({ children }) {
	return (
		<div className="relative min-h-screen">
			<HeaderLayout />
			<div className="h-full">{children ? children : <Outlet />}</div>
			<FooterLayout />
		</div>
	)
}

export default DashboardLayout
