import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect } from "react"
import { Outlet, useRouter } from "@router"
import useUserStore from "@store/userStore"

import { Toaster } from "react-hot-toast"
import { useGlobalStore } from "@store"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
	},
})


function BaseLayout({}) {

	const router = useRouter()

	const { setUser } = useUserStore()
	const { loading } = useGlobalStore()

	useEffect(() => {


		/*api.get("/users/me")
			.then(({data})=>{
				setUser(data)
			})
			.catch((err)=>{
				//router.replace("/login")
			})
			.finally(()=>{

			})*/


	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<Toaster position={"top-right"} />
			<Outlet />
		</QueryClientProvider>

	)
}

export default BaseLayout
