import { Icon } from 'components/atoms';
import React, { memo } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: 'default' | 'white';
  disabled?: boolean;
}

function InputComponent({
  type,
  className,
  disabled,
  ...props
}: InputProps): JSX.Element {
  return (
    <div className={`${styles.Main} ${className}`}>
      <div className={styles.LeftContainer}>
        <Icon name="search" />
      </div>
      <input
        {...props}
        disabled={disabled}
        type="text"
        className={`${styles.Input} ${styles[type]}`}
      />
    </div>
  );
}

InputComponent.defaultProps = {
  className: undefined,
  disabled: false,
};

export const Input = memo(InputComponent);
