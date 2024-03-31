import {twMerge} from "tailwind-merge"
import DefaultImage from "@commons/assets/images/user-placeholder-image.png"

type Props = {
    className?: string
    src?: string
    alt?: string
    online?: boolean
}

const AvatarImage = ({className, online, src, alt}: Props) => {
    return (
        <div className={"relative"}>
            <img src={src ?? DefaultImage} className={twMerge("bg-primary rounded-full w-16 aspect-square", className)}
                 alt={alt ?? "profile-image"}/>
            {
                online && <div
                    className="bg-[#16D313FF] w-3 border border-primary-dark-alt absolute -bottom-[5%] right-0 rounded-full aspect-square"></div>
            }
        </div>
    )
}


export default AvatarImage
