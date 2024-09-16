import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect } from "react"
import { Outlet, usePathname, useRouter } from "@router"
import useUserStore from "@store/userStore"

import { Toaster } from "react-hot-toast"
import { useGlobalStore } from "@store"
import { api } from "@utils/axiosProvider"
import DialogLayout from "@commons/components/layouts/Dialog.layout"
import LoadingSpinner from "@commons/components/LoadingSpinner"
import ConfirmModal from "@commons/components/modals/Confirm.modal"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
	},
})


function BaseLayout({}) {

	const router = useRouter()
	const pathName = usePathname()
	console.log(pathName)

	const { setUser } = useUserStore()
	const { loading, setLoading, showConfirmModal, setShowConfirmModal } = useGlobalStore()

	useEffect(() => {
		setLoading(true)
		const user_data = JSON.parse(localStorage.getItem("user_data"))

		if (user_data && pathName !== "/" && pathName !== "/join-our-waitlist") {api.get("/auth/me", {"Authorization": `Bearer ${user_data.access_token}`})
			.then(({data})=>{
				setUser(data)
			})
			.catch((err)=>{
				console.log(err)
				let login_redirect = pathName
				if (login_redirect == "/login" || login_redirect == "/join-our-waitlist"){
					login_redirect = "/login"
				} else {
					login_redirect = `/login?redirect=${encodeURIComponent(usePathname())}`
				}
				router.replace(login_redirect)
			})
			.finally(()=>{
				setLoading(false)
		})} else {
			pathName !=="/signup" && pathName !== "/" && pathName !== "/join-our-waitlist" && router.replace(`/login?redirect=${encodeURIComponent(usePathname())}`)
			setLoading(false)
		}


	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<DialogLayout className={"w-fit aspect-square min-w-0 min-h-0"} show={loading}>
				<LoadingSpinner className={"text-primary w-8 h-8"} />
			</DialogLayout>
			<ConfirmModal />
			<Toaster position={"top-right"} />
			<Outlet />
		</QueryClientProvider>

	)
}

export default BaseLayout
