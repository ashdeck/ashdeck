import HeaderLayout from "@commons/components/layouts/Header.layout"
import FooterLayout from "@commons/components/layouts/Footer.layout"
import { Outlet } from "react-router-dom"

function LandingLayout({ children }) {
	return (
		<div className="relative min-h-screen bg-primary-dark-alt">
			<HeaderLayout />
			{children ? children : <Outlet />}
			<FooterLayout />
		</div>
	)
}

export default LandingLayout
