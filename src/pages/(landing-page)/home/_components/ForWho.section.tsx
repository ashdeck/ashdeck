import CustomButton from "@components/CustomButton"
import HeadingText from "@components/HeadingText"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "@router/link"


type Props = {
	className?: string
}


const ForWhoSection = ({ className }: Props) => {

	const features = [
		{
			title: "Students",
			description: "Accelerate your academic journey and achieve top grades while saving time and money.",
			image: <img className={"w-[30%] absolute"} src={"/images/student.png"} alt={""} />,
		},
		{
			title: "Developers",
			description: "Dive deep into your work without interruptions and deliver your best code yet.",
			image: <img className={"w-[35%] absolute"} src={"/images/pc.png"} alt={""} />,
		},
		{
			title: "Marketers",
			description: "Stay ahead of the competition by focusing on what truly matters.",
			image: <img className={"w-[25%] absolute"} src={"/images/megaphone.png"} alt={""} />,

		},
		{
			title: "Writers",
			description: "Let your creativity flow uninterrupted and produce your best work.",
			image: <img className={"w-[40%] absolute"} src={"/images/papers.png"} alt={""} />,

		},
		{
			title: "Entrepreneurs",
			description: "Make time for strategic planning and watch your business thrive.",
			image: <img className={"w-[25%] absolute"} src={"/images/coin.png"} alt={""} />,

		},
		{
			title: "Freelancers",
			description: "Take control of your workload and make productivity your norm.",
			image: <img className={"w-[20%] absolute"} src={"/images/rocket.png"} alt={""} />,

		},
		{
			title: "Product Designers",
			description: "Carve out space for creativity and bring your ideas to life.",
			image: <img className={"w-[25%] absolute"} src={"/images/palette.png"} alt={""} />,

		},

	]


	return (
		<div id={"features"}
			 className={"flex flex-col gap-4 min-h-[100vh] px-[15%] justify-center items-center"}>

			<HeadingText className="mt-[10%] max-w-[80%] w-fit text-5xl text-center">
				Control your Time and Boost your Productivity with Website Blocker for Achieving your Goals
			</HeadingText>

			<p className={"w-full text-gray-600 md:max-w-[60%] text-center"}>
				It's easy to set up and use.
			</p>

			{/* <CustomButton variant={"text"} endIcon={<ArrowUpRightIcon />}>
				Start for FREE
			</CustomButton> */}

			<Link href="/join-our-waitlist">
				<CustomButton variant={"text"} endIcon={<ArrowUpRightIcon />}>
					Join Our Waitlist
				</CustomButton>
			</Link>


			<div className="grid grid-cols-1 gap-24 w-full my-[20%]">


				{
					features.map((item, i) => <FeatureCard item={item} index={i} />)
				}


			</div>


		</div>
	)
}


export default ForWhoSection


const FeatureCard = ({ item, index = 0 }) => {
	return (
		<div className={`flex bg-bg-50 dark:bg-bg-dark-50 rounded-lg w-full justify-between relative ${index % 2 ? "flex-row-reverse" : "flex-row"}`}>

			<div className="w-[50%] flex flex-col px-16 py-10">
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

			<div className="aspect-square flex flex-col px-16 py-10 items-center justify-center">
				{item?.image}
			</div>


		</div>
	)
}
