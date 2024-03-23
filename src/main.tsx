import React from "react"
import ReactDOM from "react-dom/client"
import "@assets/css/globals.css"
import RouterSetup from "@router"
import { BrowserRouter } from "react-router-dom"


ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterSetup />
	</React.StrictMode>,
)
