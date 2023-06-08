import React from 'react'
import { cva } from 'class-variance-authority';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  primary?: boolean
  textarea?: boolean
}

const FormInput = ({ primary, textarea, placeholder, value, type, onChange }: Props) => {
  return (
    <div>
      {
        textarea ?
          <textarea
            placeholder={placeholder}
            className='form-input '
            rows={1}
            value={value}
          /> :
          <input
            value={value}
            placeholder={placeholder}
            className='form-input'
          />}
    </div>
  )
}

export default FormInput