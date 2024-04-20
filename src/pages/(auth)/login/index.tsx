import CustomButton from "@commons/components/CustomButton"
import { useSearchParams } from "@router"

function LoginPage({}) {
	const [params] = useSearchParams()

	const login = () => {
		console.log("Login")
		if (params.get("redirect")) {
			window.location.replace(params.get("redirect"))
		}
	}

    return (
        <div className={"bg-primary w-full h-screen  text-white flex flex-col items-center justify-center"}>
            <h1 className={"font-outfit text-xl"}>Login Page</h1>
            <p>Welcome to the login page!</p>
			<CustomButton onClick={login} className={"mt-4"}>Login</CustomButton>
        </div>
    )
}

export default LoginPage
