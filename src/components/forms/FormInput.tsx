import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  primary?: boolean;
  textarea?: boolean;
  options?: Option[];
}

const FormInput: React.FC<Props> = ({ primary, textarea, placeholder, value, type, onChange, options }) => {
  if (type === 'dropdown' && options) {
    return (
      <select className={`form-input${primary ? ' primary' : ''}`} value={value} placeholder='gender' >
        {options.map((option) => (
          <option key={option.value} value={option.value} className='form-input'>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        className={`form-input${primary ? ' primary' : ''}`}
        value={value}
        rows={4}
      />
    );
  }

  return (
    <input
      value={value}
      placeholder={placeholder}
      className={`form-input${primary ? ' primary' : ''}`}
    />
  );
};

export default FormInput;