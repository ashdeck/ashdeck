import Link from "../router/link"
import CustomButton from "./CustomButton"
import { FaGithub } from "react-icons/fa"
import { FaArrowsDownToPeople } from "react-icons/fa6";

interface Props{
    text?: string
    style?: string
}

export default function AddToChrome({text, style}: Props){
    return <Link href="https://chromewebstore.google.com/detail/ashdeck/ahdbmagpbepplcdlfodgilcljafooimc">
        <div className=" border-0 hover-border-0 text-[.8rem] md:text-[1rem]">
            <CustomButton className="min-w-[12rem]">
                <img width={30} src="/images/chrome-icon.png" alt="" />
                <p className="ml-2">{text ? text: "Add to Chrome"}</p>
            </CustomButton>
        </div>
    </Link>
}


export function StarOnGithub(){
    return <Link href="https://github.com/ashdeck/ashdeck" target="_blank">
        <CustomButton className="bg-secondary border-[1px] border-white py-[10px]">
            <div className="flex items-center justify-center w-[10rem] gap-2 ">
                <FaGithub className="font-bold" size={20} />
                <p className="">Star On Github</p>
            </div>
        </CustomButton>
    </Link>
}

export function Affiliates({text, style}: Props){
    return <Link href="https://ashdeck.affonso.io" target="_blank">
        <div className=" border-0 hover-border-0 text-[.8rem] md:text-[1rem] px-4 text-center">
            <CustomButton className="min-w-[12rem]  bg-secondary py-3 px-8">
                <FaArrowsDownToPeople className="font-bold" size={20} />
                <p className="hidden ml-2 sm:block">{text ? text: "Join our Affliate Program"}</p>
                <p className="ml-2 sm:hidden">{"Affiliates"}</p>
            </CustomButton>
        </div>
    </Link>
}
