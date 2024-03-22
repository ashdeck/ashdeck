import RouterView, { BrowserRouter } from "@router"
import Providers from "@src/app/providers"
import { Routes } from '@generouted/react-router'


function App() {

	return (
		<Providers>
			<Routes/>
		</Providers>
	)
}


/*function App() {

	return (
		<Providers>
			<BrowserRouter>
				<RouterView/>
			</BrowserRouter>
		</Providers>
	)
}*/

export default App
