import React from 'react'
import {cva} from 'class-variance-authority';

interface Props extends HTMLInputElement{
    primary?: boolean
}

const FormInput = ({primary,placeholder,value,type,onchange}:Props) => {
  return (
    <input
        placeholder={placeholder}
        />
  )
}

export default FormInput