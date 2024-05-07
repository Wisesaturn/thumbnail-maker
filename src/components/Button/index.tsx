import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hierarchy?: 'primary' | 'secondary';
  children: string;
}

export default function Button({ hierarchy = 'primary', children, ...rest }: Props) {
  const HIERARCHY_CLASS = hierarchy === 'primary' ? 'button-primary' : 'button-secondary';

  return (
    <div className="button-container">
      <button className={`${HIERARCHY_CLASS} transition-colors`} type="button" {...rest}>
        {children}
      </button>
    </div>
  );
}
