import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...rest }: Props) {
  return (
    <div className="input-container">
      {label ? <label htmlFor={label}>{label}</label> : null}
      <input id={label} {...rest} />
    </div>
  );
}
