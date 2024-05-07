import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export default function Button({ children, ...rest }: Props) {
  return (
    <div className="button-container">
      <button className="transition-colors" type="button" {...rest}>
        {children}
      </button>
    </div>
  );
}
