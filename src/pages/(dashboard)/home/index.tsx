import CustomButton from "@commons/components/CustomButton"
import { useRouter } from "@router"

function HomePage({}) {

	const router = useRouter()

	return (
		<div className={"bg-primary w-full h-screen gap-y-4 text-white flex flex-col items-center justify-center"}>
			<h1 className={"font-outfit text-xl"}>Home Page</h1>
			<p>Welcome to the home page!</p>

			<CustomButton className="bg-white text-black" onClick={()=>router.push("/settings")} >
				Go to Settings
			</CustomButton>

		</div>
	)
}

export default HomePage
