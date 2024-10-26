import { ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';
import sizes from '../../css/sizes.module.css';
import styles from './button.module.css';

type ButtonProps = ComponentProps<'button'> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', ...buttonProps }, ref) => {
    return (
      <button
        className={clsx(styles.button, sizes[size], className)}
        {...buttonProps}
        ref={ref}
      />
    );
  }
);
