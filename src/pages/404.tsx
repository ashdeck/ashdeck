import Link from "@router/link"

export default function _404_Page(){
    return(
        <div
            className="bg-white dark:bg-bg-dark transition duration-300 flex flex-col h-screen w-full items-center justify-center relative dark:text-white">
            <p className="text-[3rem] md:text-[4rem] my-2 text-center">😬</p>
            <p className="font-outfit font-bold text-2xl  md:text-3xl my-4 text-center">You're definitely on an adventurer but..</p>
            <p className="text-md">It seems like you got lost this time.</p>
            <Link href="/" className="text-secondary my-1 text-md text-center">
                Don't worry, Here is an easy way <span className="font-semibold text-primary">home!</span>
            </Link>

            <p className="text-md text-gray-500 absolute bottom-16 font-outfit text-center">404 ERROR: Requested page not found.</p>
        </div>
    )
}




// export const _404_Page = () => {
//     return (
        
//     )
// }
