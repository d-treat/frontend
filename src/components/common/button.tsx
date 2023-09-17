import { useRouter } from 'next/router'
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    dark?: boolean
    children?: React.ReactNode,
    className?: string,
    href?: string,
}
const Button = ({ dark, children, onClick, type, className, href }: Props) => {
    const router = useRouter();

    return (
        <button className={
            `text-white w-full py-2 rounded-md capitalize text-center flex items-center justify-center
            ${dark ? "bg-secondary-100" : "bg-primary-100"
            } ${className}`}
            onClick={href ? () => router.push(href) : onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button