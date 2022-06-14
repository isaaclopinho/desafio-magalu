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
};

export type TypographyType = keyof typeof typeMapping;

export interface TypographyProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  type: TypographyType;
}

function TypographyComponent({ type, ...props }: TypographyProps): JSX.Element {
  const Component = typeMapping[type];

  return (
    <Component className={styles[type]} {...props}>
      {props.children}
    </Component>
  );
}

export const Typography = memo(TypographyComponent);
