import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  href?: string;
}

export default function Button({
  className = '',
  children,
  ...props
  
}: ButtonProps) {

 
  const hasRoundedClass = /rounded(-\w+)?/.test(className);

  return (
    <button
      type="button"
      className={[
        ' font-button font-semibold',
        ' text-black',
        'shadow-sm transition-colors hover:bg-indigo-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2',
        hasRoundedClass ? '' : 'rounded-xl', // add default if none passed
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
