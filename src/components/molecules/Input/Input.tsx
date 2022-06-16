import { Icon, Spinner } from 'components/atoms';
import React, { memo, useEffect } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: 'default' | 'white';
  disabled?: boolean;
  loading?: boolean;
  value: string;
  setValue: React.ChangeEventHandler<HTMLInputElement>;
  setCurrentQuery?: (str: string) => void;
}

function InputComponent({
  type,
  className,
  disabled,
  setCurrentQuery,
  value,
  setValue,
  loading,
  ...props
}: InputProps): JSX.Element {
  useEffect(() => {
    if (!setCurrentQuery) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    }

    const timeOutId = setTimeout(() => {
      if (setCurrentQuery != null) {
        setCurrentQuery(value);
      }
    }, 500);
    return () => clearTimeout(timeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className={`${styles.Main} ${className}`}>
      <div className={styles.LeftContainer}>
        {loading ? <Spinner size="sm" /> : <Icon name="search" />}
      </div>
      <input
        {...props}
        value={value}
        onChange={setValue}
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
  loading: false,
  setCurrentQuery: undefined,
};

export const Input = memo(InputComponent);
