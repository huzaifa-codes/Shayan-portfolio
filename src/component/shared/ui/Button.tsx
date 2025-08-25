import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
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
        'inline-flex items-center justify-center',
        'px-12 py-3 font-button font-semibold',
        'bg-blue-100 text-black',
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
