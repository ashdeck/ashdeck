import Link from "../router/link"
import CustomButton from "./CustomButton"
import { FaGithub } from "react-icons/fa"

export default function AddToChrome(){
    return <Link href="https://chromewebstore.google.com/detail/ashdeck/ahdbmagpbepplcdlfodgilcljafooimc">
        <div className="w-[12rem] border-0 hover-border-0 text-[.8rem] md:text-[1rem]">
            <CustomButton className="">
                <img width={30} src="/images/chrome-icon.png" alt="" />
                <p className="ml-2">Add to Chrome</p>
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
