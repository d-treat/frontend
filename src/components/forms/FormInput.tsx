import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  primary?: boolean;
  textarea?: boolean;
  file?: boolean;
  options?: Option[];
}

const FormInput: React.FC<Props> = ({ primary, textarea, placeholder, value, type, onChange, options, file }) => {
  if (type === 'dropdown' && options) {
    return (
      <select className={`form-input ${primary ? ' primary' : ''}`} value={value} placeholder='gender' >
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
        // @ts-ignore
        onChange={onChange}
        rows={4}
      />
    );
  }

  if (file) {
    return (
      <div
        className={`form-input relative ${primary ? ' primary' : ''}`}
      >
        <input
          accept='application/pdf'
          type='file'
          className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
          onChange={onChange}
        />
        <span className='text-gray-400'>{value || placeholder}</span>
      </div>
    )
  }

  return (
    <input
      value={value}
      type={type || "text"}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-input${primary ? ' primary' : ''}`}
    />
  );
};

export default FormInput;