import React, { memo } from 'react';
import styles from './Typography.module.scss';

const typeMapping: Record<string, 'h1' | 'h2' | 'h3' | 'p'> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p1: 'p',
  p2: 'p',
  p3: 'p',
  p4: 'p',
  p5: 'p',
  p6: 'p',
  p7: 'p',
};

export type TypographyType = keyof typeof typeMapping;

export type FontWeightType = 'regular' | 'bold' | 'semibold';

export type FontAlignType = 'left' | 'right' | 'center';

export type FontColors =
  | 'default'
  | 'gray-light'
  | 'gray-xlight'
  | 'gray-lighter'
  | 'primary'
  | 'primary-light'
  | 'primary-lighter'
  | 'green-dark'
  | 'green-light';

export interface TypographyProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  type: TypographyType;
  weight?: FontWeightType;
  color?: FontColors;
  align?: FontAlignType;
}

function TypographyComponent({
  type,
  weight,
  color,
  align,
  ...props
}: TypographyProps): JSX.Element {
  const Component = typeMapping[type];

  return (
    <Component
      {...props}
      className={`${styles[type]} ${styles[`font-align-${align}`]} ${
        styles[`font-weight-${weight}`]
      } ${styles[`font-color-${color}`]} ${props.className}`}
    >
      {props.children}
    </Component>
  );
}

TypographyComponent.defaultProps = {
  weight: 'regular',
  color: 'default',
  align: 'left',
};

export const Typography = memo(TypographyComponent);
