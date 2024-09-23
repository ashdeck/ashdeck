import { twMerge } from "tailwind-merge"

type Props = {
    className?: string
    icon?: boolean
}

const Logo = ({className, icon}: Props) => {
    return (
		<div className={twMerge("flex gap-2 w-10 items-center", className)}>
            <img src="/images/ashdeck-logo-2.png" alt="" className="w-36"/>
        </div>
    )
}


export default Logo
