import { type PropsWithChildren } from 'react';

type Button = PropsWithChildren<{
  variant?: 'primary' | 'popular';
  className?: string;
}>;

export default function Button({ variant, children, className = '' }: Button) {
  return (
    <button
      className={`btn px-5 py-3 rounded font-medium shadow-xs cursor-pointer border border-solid ${variant === 'popular' ? 'bg-indigo-500 border-indigo-500 text-white hover:bg-indigo-800' : 'text-neutral-900 border-neutral-200 hover:bg-neutral-50'} md:text-lg ${className}`}
    >
      {children}
    </button>
  );
}
