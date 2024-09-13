import { useState } from "react"
import CustomButton from "@commons/components/CustomButton"
import { useSearchParams } from "react-router-dom" // Assuming you're using react-router-dom
import { api } from "@/src/commons/utils/axiosProvider"

function SignUpPage() {
	const [params] = useSearchParams()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")

	const signup = async (e) => {
		e.preventDefault() // Prevent page refresh on form submission

		// You can perform your login logic here, such as sending the credentials to the server
		console.log("Email:", email)
		console.log("Password:", password)

		const { data } = await api.post("/auth", {
			"email": email,
			"password": password,
			"first_name": first_name,
			"last_name": last_name
		});
		// localStorage.setItem("user_data", JSON.stringify(data));

		window.location.replace("/login")
	}

    return (
		<div className="bg-primary-dark-alt w-full h-screen text-white flex flex-col items-center justify-center">
			<h2 className="text-3xl mb-4 font-semibold">Welcome to Ashdeck!</h2>

			<form onSubmit={signup} className="flex flex-col w-80">
				<label className="mb-2 text-lg" htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 rounded text-black"
					required
				/>

                <label className="mb-2 text-lg" htmlFor="first_name">First Name</label>
				<input
					type="string"
					id="first_name"
					value={first_name}
					onChange={(e) => setFirstName(e.target.value)}
					className="p-2 rounded text-black"
					required
				/>

                <label className="mb-2 text-lg" htmlFor="last_name">Last Name</label>
				<input
					type="string"
					id="last_name"
					value={last_name}
					onChange={(e) => setLastName(e.target.value)}
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

				<CustomButton type="submit" className="mt-6 w-full font-bold text-lg uppercase">Sign Up</CustomButton>
			</form>

			<div className="text-white mt-8 max-w-96 text-left">
				<p>Already have an account? <span className="text-primary cursor-pointer" onClick={()=>window.location.replace("/login")}>Sign In!</span></p>
			</div>
		</div>
    )
}

export default SignUpPage
