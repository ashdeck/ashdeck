import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect, useMemo } from "react"
import { useLocalStorage } from "@hooks"
import { Outlet, useRouter } from "@router"
import useUserStore from "@store/userStore"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter, UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
	},
})

const network = WalletAdapterNetwork.Mainnet


const SOL_RPC_ENDPOINT = "https://solana-mainnet.g.alchemy.com/v2/7oIO33FX9H3X3_ngqRkGpKSXw0lI3hbQ"


function BaseLayout({ children }) {
	const wallets = useMemo(
		() => [new UnsafeBurnerWalletAdapter(), new PhantomWalletAdapter()],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[network],
	)

	const { getFromStorage } = useLocalStorage()
	const router = useRouter()

	const { user, setUser } = useUserStore()
	const token = localStorage.getItem("solsgram_token")

	useEffect(() => {


		/*const stored_user_data = getFromStorage(QUERY_KEYS.user)
		if (stored_user_data) {
			setUser(stored_user_data)
		} else {
			router.replace("/login")
		}*/
		if (token) {
			axios
				.get(
					"https://solgram-api-37a379be903b.herokuapp.com/accounts/me/",
					{
						headers: { Authorization: `Bearer ${token}` },
					},
				)
				.then((res) => {
					console.log("userData", res.data)
					const userData = res.data
					userData.token = token
					setUser(userData)
				})
				.catch((error) => {
					// Handle error

					// You can set some default user data or show an error message to the user
				})

		} else {

		}


	}, [])


	return (

		<ConnectionProvider endpoint={SOL_RPC_ENDPOINT}>

			<WalletProvider wallets={wallets} autoConnect>
				<WalletModalProvider>
					<QueryClientProvider client={queryClient}>
						<Toaster position={"top-right"} />
						<ToastContainer draggable position="top-right" pauseOnHover limit={3} autoClose={5000}
										hideProgressBar={false}
										newestOnTop={false}
										closeOnClick
										rtl={false}
										pauseOnFocusLoss />


						<Outlet />
					</QueryClientProvider>


				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>


	)
}

export default BaseLayout
