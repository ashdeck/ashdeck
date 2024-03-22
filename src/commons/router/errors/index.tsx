import Link from "@router/link";

export const _404ErrorView = () => {
	return (
		<div className="bg-white dark:bg-bg-dark transition duration-300 flex flex-col h-screen w-full items-center justify-center relative dark:text-white">
			<p className="text-[5rem] my-2">😬</p>
			<p className="font-outfit font-bold  text-3xl my-6">You're definitely an adventurer but..</p>
			<p className="text-md">It seems like you got lost this time.</p>
			<Link href="/" className="text-secondary my-1 text-md">
				Don't worry, Here is an easy way home
			</Link>

			<p className="text-md text-gray-500 absolute bottom-16 font-outfit">404 ERROR: Requested page not found.</p>
		</div>
	);
};
