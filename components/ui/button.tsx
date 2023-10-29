import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        className={cn(
          `
    w-auto
    rounded-full
    bg-black
    border-transparent
    px-5
    py-3
    disabled: cursor-not-allowed
    text-white
    hover:opacity-75
    trasition
    `,
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;