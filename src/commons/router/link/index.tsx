import React from "react"
import {Link as Linker} from "react-router-dom"

type Props = {
    href: string
    className?: string
    children: React.ReactNode
} & Omit<React.ComponentProps<"a">, "ref">

const Link = ({href, className, children, ...rest}: Props) => {
    return (
        <Linker className={className} to={href} {...rest}>
            {children}
        </Linker>
    )
}

export default Link
