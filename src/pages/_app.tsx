import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect } from "react"
import { useLocalStorage } from "@hooks"
import { Outlet, useRouter } from "@router"
import useUserStore from "@store/userStore"

import { Toaster } from "react-hot-toast"
import { QUERY_KEYS } from "@utils"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
	},
})


function BaseLayout({}) {

	const { getFromStorage } = useLocalStorage()
	const router = useRouter()

	const { user, setUser } = useUserStore()

	useEffect(() => {


		const stored_user_data = getFromStorage(QUERY_KEYS.user)
		if (stored_user_data) {
			setUser(stored_user_data)
		} else {
			router.replace("/login")
		}


	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<Toaster position={"top-right"} />
			<Outlet />
		</QueryClientProvider>

	)
}

export default BaseLayout
