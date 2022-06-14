import Icons, { IconNames } from 'assets/icons';
import React, { memo } from 'react';

export interface IconProps {
  className?: string;
  name: IconNames;
  size?: number | string;
}

function IconComponent({ className, name, size }: IconProps): JSX.Element {
  return (
    <img
      src={Icons[name]}
      width={size}
      height={size}
      className={className}
      alt={`icon-${name}`}
    />
  );
}

IconComponent.defaultProps = {
  className: undefined,
  size: 16,
};

export const Icon = memo(IconComponent);
