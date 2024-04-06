import { twMerge } from "tailwind-merge"

type Props = {
    className?: string
    icon?: boolean
}

const Logo = ({className, icon}: Props) => {
    return (
		<div className={twMerge("flex gap-2 w-10 items-center", className)}>
            <img className={"w-full aspect-square bg-white rounded-full"} alt={"logo"} />
            {
				!icon && <h1 className={"text-lg font-bold"}>WebsiteBlocker</h1>
            }
        </div>
    )
}


export default Logo
