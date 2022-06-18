import Icons, { IconNames } from 'assets/icons';
import React, { memo } from 'react';
import styles from './Icon.module.scss';

export interface IconProps {
  className?: string;
  name: IconNames;
  size?: number | string;
  onClick?: () => void;
  disabled?: boolean;
}

function IconComponent({
  className,
  name,
  size,
  onClick,
  disabled,
}: IconProps): JSX.Element {
  return (
    <button
      data-testid="btn-icon"
      type="button"
      onClick={onClick}
      className={`${styles['btn-style']} ${onClick ? styles.cursor : ''}`}
      disabled={disabled || !onClick}
    >
      <img
        data-testid="img"
        src={Icons[name]}
        width={size}
        height={size}
        className={className}
        alt={`icon-${name}`}
      />
    </button>
  );
}

IconComponent.defaultProps = {
  className: undefined,
  size: 16,
  disabled: false,
  onClick: undefined,
};

export const Icon = memo(IconComponent);
