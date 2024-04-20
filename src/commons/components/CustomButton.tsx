import React from "react"
import { twMerge } from "tailwind-merge"
import LoadingSpinner from "./LoadingSpinner"

type CustomButtonProps = {
    className?: string
    border?: boolean
    children?: React.ReactNode
    variant?: "gradient" | "primary" | "secondary" | "outlined" | "text" | "text-gradient"
    disabled?: boolean
    onClick?: any
    startIcon?: any
    endIcon?: any
    style?: {}
    loading?: boolean
} & React.ComponentProps<"button">

const CustomButton = (props: CustomButtonProps) => {
    const {
        className = "",
        border = false,
        children = "",
        variant = "primary",
        disabled = false,
        onClick = null,
        startIcon,
        endIcon,
        style = {},
        loading = false,
        ...rest
    } = props


    const styling = {
        gradient: `${border && "border"} bg-gradient-to-r from-primary via-blue-400 to-secondary text-primary-dark hover:ring-2 px-4`,
        primary: `${border && "border"} bg-primary text-white hover:ring-2 px-4`,
        secondary: `${border && "border"} bg-secondary text-white hover:ring-2 px-4`,
        outlined: "text-white border border-outline hover:ring-2 px-4",
        text: `text-primary-dark dark:text-white w-fit px-0 hover:text-primary px-0`,
        "text-gradient": `text-secondary w-fit px-0 `,
    }[variant]

    const handleClick = (event: any) => {
        //rippleEffect(event);
        onClick && onClick(event)
    }

    const classes = twMerge(
        `${styling} py-2 font-[500] font-heading  h-fit flex justify-center items-center gap-1 cursor-pointer rounded-xl font-heading relative overflow-hidden transition duration-500 ${className} ${(disabled === true) && "cursor-not-allowed text-white opacity-50"}`,
    )

    return (
        <button disabled={disabled || loading} onClick={handleClick} className={classes} style={style} {...rest}>
            {!loading && (
                <div className="flex items-center justify-center">
                    {startIcon && <span className="mr-2 flex h-5 w-5 items-center justify-center">{startIcon}</span>}

                    {
                        variant === "text-gradient" ? <span
                            className="text-transparent bg-gradient-to-b from-primary via-blue-400 to-secondary bg-clip-text">{children}</span> : children
                    }
                    {endIcon && (
                        <span className="ml-2 flex h-5 w-5 items-center justify-center">{endIcon && endIcon}</span>
                    )}
                </div>
            )}
            {loading ? <LoadingSpinner color={"white"} className="dark:text-white" /> : null}
        </button>
    )
}

function rippleEffect(event: any) {
    const btn = event.currentTarget

    const circle = document.createElement("span")
    const diameter = Math.max(btn.clientWidth, btn.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`
    circle.classList.add("effect-x-ripple")

    const ripple = btn.getElementsByClassName("effect-x-ripple")[0]

    if (ripple) {
        ripple.remove()
    }

    btn.appendChild(circle)
}

export default CustomButton
