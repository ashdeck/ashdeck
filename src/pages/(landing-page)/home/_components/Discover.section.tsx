import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "@router/link"


type Props = {
	className?: string
}


const DiscoverSection = ({ className }: Props) => {

	const features = [
		{
			title: "Students",
			description: "Accelerate your academic journey and achieve top grades while saving time and money.",
			image: <p className={"text-[150px]"}>📚</p>,

		},
		{
			title: "Developers",
			description: "Dive deep into your work without interruptions and deliver your best code yet.",
			image: <p className={"text-[150px]"}>👨‍💻</p>,

		},
		{
			title: "Marketers",
			description: "Stay ahead of the competition by focusing on what truly matters.",
			image: <p className={"text-[150px]"}>📈</p>,

		},
		{
			title: "Writers",
			description: "Let your creativity flow uninterrupted and produce your best work.",
			image: <p className={"text-[150px]"}>✍️</p>,

		},
		{
			title: "Entrepreneurs",
			description: "Make time for strategic planning and watch your business thrive.",
			image: <p className={"text-[150px]"}>🚀</p>,

		},
		{
			title: "Freelancers",
			description: "Take control of your workload and make productivity your norm.",
			image: <p className={"text-[150px]"}>🚀</p>,

		},
		{
			title: "Product Designers",
			description: "Carve out space for creativity and bring your ideas to life.",
			image: <p className={"text-[150px]"}>🎨</p>,

		},

	]


	return (
		<div id={"features"}
			 className={"flex flex-col gap-4 min-h-[100vh] px-[15%] justify-center items-center"}>

			<HeadingText className="mt-[10%] max-w-[80%] w-fit text-5xl text-center">
				Control your Time and Boost your Productivity with Website Blocker for Achieving your Goals
			</HeadingText>

			<p className={"w-full md:max-w-[60%] text-center"}>
				It's easy to set up and use.
			</p>

			<CustomButton variant={"text"} endIcon={<ArrowUpRightIcon />}>
				Start Now
			</CustomButton>


			<div className="grid grid-cols-2 gap-12 w-full my-[20%]">


				{
					features.map((item, i) => <FeatureCard item={item} index={i} />)
				}


			</div>


		</div>
	)
}


export default DiscoverSection


const FeatureCard = ({ item, index = 0 }) => {
	return (
		<div className={"flex bg-bg-50 dark:bg-bg-dark-50 rounded-lg w-full flex-row justify-between relative"}>

			<div className="w-[90%] flex flex-col px-16 py-10">
				<div className={"font-heading font-medium text-2xl"}>
					{item?.title}
				</div>

				<p className={"text-sm my-4"}>
					{item?.description}
				</p>


				<Link href={"/dashboard"}>
					<CustomButton className={"mt-20"} variant={"text"} endIcon={<ArrowUpRightIcon />}>
						Create Account
					</CustomButton>
				</Link>
			</div>

			{/*<div className="aspect-square top-0 bottom-0 right-0 w-[10vh] h-[10vh] rounded-full absolute  flex flex-col px-16 py-10 items-center justify-center">
				{item?.image}
			</div>
*/}

		</div>
	)
}
