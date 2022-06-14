import React, { memo, useCallback } from 'react';
import styles from './Toggle.module.scss';

export interface ToggleProps {
  className?: string;
  checked: boolean;
  onChecked: (checked: boolean) => void;
  disabled?: boolean;
}

function ToggleComponent({
  className,
  checked,
  onChecked,
  disabled,
}: ToggleProps): JSX.Element {
  const handleClick = useCallback(
    () => onChecked?.(!checked),
    [onChecked, checked]
  );

  return (
    <label className={`${styles.switch} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleClick}
        disabled={disabled}
      />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
}

ToggleComponent.defaultProps = {
  className: undefined,
  disabled: false,
};

export const Toggle = memo(ToggleComponent);
