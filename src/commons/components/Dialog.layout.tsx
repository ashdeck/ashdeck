
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	className?: string;
	show: boolean;
	transparent?: boolean;
	setShow?: React.Dispatch<React.SetStateAction<boolean>>;
} & React.PropsWithChildren;

const DialogLayout = (props: Props) => {
	const { className = "", children, show, transparent } = props;

	if (show)
		return (
			<div
				className={twMerge(
					`w-screen h-screen bg-gray-700 bg-opacity-10 backdrop-blur-sm z-[6000] fixed top-0 left-0 items-center justify-center flex `
				)}>
				<div
					className={twMerge(
						`p-8 bg-white dark:bg-bg-dark border-gray-200 border dark:border-gray-800 w-fit min-w-[30%] min-h-[30%] rounded-lg justify-center flex flex-col ${className} ${
							transparent && `bg-transparent dark:bg-transparent border-0`
						}`
					)}>
					{children}
				</div>
			</div>
		);
};

export default DialogLayout;
