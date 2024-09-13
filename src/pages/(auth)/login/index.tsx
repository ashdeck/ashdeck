import { useState } from "react"
import CustomButton from "@commons/components/CustomButton"
import { useSearchParams } from "react-router-dom" // Assuming you're using react-router-dom
import { api } from "@/src/commons/utils/axiosProvider"

function LoginPage() {
	const [params] = useSearchParams()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const login = async (e) => {
		e.preventDefault() // Prevent page refresh on form submission
		console.log("Login")

		// You can perform your login logic here, such as sending the credentials to the server
		console.log("Email:", email)
		console.log("Password:", password)

		params.append("username", email)
		params.append("password", password)
		params.append("redirect", "/dashboard")

		const { data, status } = await api.post("/auth/login", params, { 'Content-Type': 'application/x-www-form-urlencoded' }
        );

		if (status == 200){
			localStorage.setItem("user_data", JSON.stringify(data));
			const redirectUrl = params.get("redirect") || "/dashboard"
			window.location.replace(redirectUrl)
		} else {
			console.log("There is probably a problem")
		}
	}

    return (
		<div className="bg-primary-dark-alt w-full h-screen text-white flex flex-col items-center justify-center">
			<h2 className="text-3xl mb-4 font-semibold">Welcome to Ashdeck!</h2>

			<form onSubmit={login} className="flex flex-col w-80">
				<label className="mb-2 text-lg" htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 rounded text-black"
					required
				/>

				<label className="mt-4 mb-2 text-lg" htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="p-2 rounded text-black"
					required
				/>

				<CustomButton type="submit" className="mt-6 w-full font-bold text-lg uppercase">Login</CustomButton>
			</form>

			<div className="text-white mt-8 max-w-96 text-left">
				<p>Don't have an account, <span className="text-primary cursor-pointer" onClick={()=>window.location.replace("/signup")}>Sign Up!</span></p>
			</div>
		</div>
    )
}

export default LoginPage
