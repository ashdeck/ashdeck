import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "@router/link"
import AddToChrome from "@/src/commons/components/AddToChrome"

type ForWhoItem = {
  	title: string;
  	description: string;
	image: string
};

type Props = {
	className?: string
	forWhoItems?: ForWhoItem[]
}


const ForWhoSection = ({ className, forWhoItems }: Props) => {
	return (
		<div id={"features"}
			className={"flex flex-col gap-4 min-h-[100vh] px-[5%] md:px-[15%] justify-center items-center"}>

			<h2 className="mt-[10%] max-w-[90%] md:max-w-[80%] w-fit text-2xl md:text-3xl lg:text-5xl text-center">
				Pomodoro Timer: Block Distractions and Boost Focus
			</h2>

			<p className={"w-full text-gray-600 max-w-[90%] md:max-w-[60%] text-center hidden"}>
				It's easy to set up and use.
			</p>

			{/* <CustomButton variant={"text"} endIcon={<ArrowUpRightIcon />}>
				Start for FREE
			</CustomButton> */}
			<div className="flex items-center justify-center md:block text-center w-full">
				{/* <Link href="/join-our-waitlist" className="w-[16rem]">
					<CustomButton variant={"text"} className={"mx-auto"} endIcon={<ArrowUpRightIcon />}>
						Join Waitlist
					</CustomButton>
				</Link> */}
				<div className="mx-auto w-full flex justify-center mt-4">
				<AddToChrome />
				</div>
			</div>


			<div className="grid grid-cols-1 gap-12 md:gap-24 w-full my-[4rem] md:my-[15%]">


				{
					forWhoItems.map((item, i) => <FeatureCard item={item} index={i} />)
				}


			</div>


		</div>
	)
}


export default ForWhoSection


const FeatureCard = ({ item, index = 0 }) => {
	return (
		<div className={`sm:flex bg-[#eff9f1] dark:bg-bg-dark-50 rounded-lg w-full justify-between relative ${index % 2 ? "flex-row-reverse" : "flex-row"}`}>

			<div className="sm:w-[50%] flex flex-col px-8 sm:px-12 md:px-20 py-10">
				<h3 className={"font-heading font-medium text-2xl"}>
					{item?.title}
				</h3>

				<p className={"text-sm my-4"}>
					{item?.description}
				</p>


				<Link href={"https://chromewebstore.google.com/detail/ashdeck/ahdbmagpbepplcdlfodgilcljafooimc"} className="w-[16rem]">
					<CustomButton className={"mt-8 sm:mt-10 md:mt-20"} variant={"text"} endIcon={<ArrowUpRightIcon />}>
						Add to Chrome
					</CustomButton>
				</Link>
			</div>

			<div className="aspect-square hidden sm:flex flex-col px-16 py-10 items-center justify-center">
				{item?.image}
			</div>


		</div>
	)
}
