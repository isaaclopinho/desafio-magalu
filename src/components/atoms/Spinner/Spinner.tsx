import React, { memo } from 'react';
import styles from './Spinner.module.scss';

export interface SpinnerProps {
  size: 'sm' | 'md' | 'lg';
}

function SpinnerComponent({ size }: SpinnerProps): JSX.Element {
  return (
    <div className={styles[`lds-ripple-${size}`]}>
      <div />
      <div />
    </div>
  );
}

export const Spinner = memo(SpinnerComponent);
