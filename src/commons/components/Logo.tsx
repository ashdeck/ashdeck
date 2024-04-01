import { twMerge } from "tailwind-merge"
import LogoPng from "@commons/assets/images/logo.png"

type Props = {
    className?: string
    icon?: boolean
}

const Logo = ({className, icon}: Props) => {
    return (
		<div className={twMerge("flex gap-2 w-10 items-center", className)}>
            <img className={"w-full aspect-square"} src={LogoPng} alt={"logo"}/>
            {
				!icon && <h1 className={"text-lg font-bold"}>WebsiteBlocker</h1>
            }
        </div>
    )
}


export default Logo
