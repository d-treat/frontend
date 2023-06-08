import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    dark?: boolean
    children?: React.ReactNode,
}
const Button = ({ dark, children, onClick,type }: Props) => {
    return (
        <button className={
            `text-white w-full py-2 rounded-md capitalize text-center flex items-center justify-center
             ${dark ? "bg-secondary-100" : "bg-primary-100"
            }`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button