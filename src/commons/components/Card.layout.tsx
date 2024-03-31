import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

type Props = {
    className?: string;
    children?: ReactNode;
    style?: any;
} & React.HTMLAttributes<HTMLDivElement>;

function CardLayout({children, className, style, ...rest}: Props) {
    return (
        <div
            style={style}
            className={twMerge(
                `border border-outline dark:border-outline-dark overflow-x-clip rounded-xl py-2 px-4`,
                className
            )}
            {...rest}>
            {children}
        </div>
    );
}

export default CardLayout;
