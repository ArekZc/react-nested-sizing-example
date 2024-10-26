import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';
import styles from './icon.module.css';

export const Icon = forwardRef<HTMLImageElement, ComponentProps<'img'>>(
  ({ className, ...imgProps }: any, ref) => {
    return (
      <img className={clsx(className, styles.icon)} {...imgProps} ref={ref} />
    );
  }
);
