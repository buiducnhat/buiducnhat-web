import React from 'react';
import { ButtonProps } from 'react-html-props';
import { twMerge } from 'tailwind-merge';

type TCommonButtonsProps = ButtonProps & {
  mode: 'filled' | 'outlined';
};

function CommonButton({ mode, children, className, ...rest }: TCommonButtonsProps) {
  return (
    <button
      className={twMerge(
        'flex cursor-pointer items-center justify-center rounded-xl px-5 py-2.5 font-semibold',
        mode === 'filled'
          ? 'bg-primary-500 text-white duration-200'
          : 'bg-transparent text-primary-500 ring-1 ring-primary-500 duration-200 hover:bg-primary-400 hover:text-white',
        'shadow-md shadow-primary-300 hover:shadow-lg hover:shadow-primary-300 dark:shadow-primary-700 dark:hover:shadow-primary-700',
        className
      )}
      {...rest}>
      {children}
    </button>
  );
}

export default CommonButton;
