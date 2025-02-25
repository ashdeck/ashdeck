import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "@router/link"
import AddToChrome from "@/src/commons/components/AddToChrome"

type FeatureItem = {
	title: string;
	icon?: string;
	description: string
};

type Props = {
	className?: string,
	title?: string,
	details?: string,
	featured_items?: FeatureItem[]
}


const HowItWorksSection = ({ className, title, details, featured_items }: Props) => {

	return (
		<div id={"how-it-works"}
			className={"flex flex-col w-full gap-4 min-h-[100vh] px-[5%] md:px-[15%] justify-center items-center"}>

			{/* <HeadingText className="mt-[10%] max-w-[80%] w-fit text-5xl text-center">

				Are distracting websites eating away at your precious time?
			</HeadingText> */}

			<h2 className="mt-[10%] max-w-[90%] md:max-w-[80%] lg:max-w-[70%] w-fit text-2xl md:text-3xl lg:text-5xl text-center">{title}
			</h2>

			<p className={"w-full text-gray-600 md:max-w-[70%] text-center text-lg"}>
				{details}
			</p>

			{/* <CustomButton variant={"text"} endIcon={<ArrowUpRightIcon />}>
				Start for FREE
			</CustomButton> */}

			<div className="mx-auto w-full flex justify-center mt-4">
				<AddToChrome />
			</div>


			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full my-[10%]">

				{
					featured_items.map((item, i) => <FeatureCard item={item} index={i} />)
				}

			</div>


		</div>
	)
}


export default HowItWorksSection


export const FeatureCard = ({ item, index = 0 }) => {
	return (
		<div className={"flex bg-[#eff9f1] dark:bg-bg-dark-50 justify-between rounded-br-[40%] border border-bg-50 dark:border-bg-dark-50 transition duration-500 hover:border-primary w-full flex-col gap-2 py-10 px-8 md:px-16"}>
			<div className="flex flex-col">
				<h3 className={"font-heading font-semibold text-xl"}>
					{item?.icon}{" "}{item?.title}
				</h3>

				<p className={"text-sm my-4"}>
					{item?.description}
				</p>
			</div>


			<Link href={"https://chromewebstore.google.com/detail/ashdeck/ahdbmagpbepplcdlfodgilcljafooimc"} className="w-[16rem]">
				<CustomButton className={"mt-20"} variant={"text"} endIcon={<ArrowUpRightIcon />}>
					Add to Chrome
				</CustomButton>
			</Link>

		</div>
	)
}
