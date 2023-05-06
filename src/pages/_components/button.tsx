import React from 'react';
import { ButtonProps } from 'react-html-props';
import { twMerge } from 'tailwind-merge';

type THomeButtonProps = ButtonProps & {
  mode: 'filled' | 'outlined';
};

function HomeButton({ mode, children, className, ...rest }: THomeButtonProps) {
  return (
    <button
      className={twMerge(
        'flex w-28 cursor-pointer items-center justify-center rounded-full px-5 py-2.5 font-semibold shadow-md shadow-bland-300 hover:bg-primary-600 hover:text-white hover:shadow-lg hover:shadow-primary-500 dark:shadow-bland-700 dark:hover:bg-primary-500 dark:hover:text-white dark:hover:shadow-primary-700',
        mode === 'filled'
          ? 'bg-bland-600 text-white duration-200 dark:bg-bland-500'
          : 'bg-transparent text-bland-600 ring-1 ring-bland-600 duration-200 hover:ring-0 dark:text-bland-400 dark:ring-bland-400',
        className
      )}
      {...rest}>
      {children}
    </button>
  );
}

export default HomeButton;
