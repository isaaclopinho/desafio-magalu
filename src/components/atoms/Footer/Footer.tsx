import React, { memo, ReactNode } from 'react';
import styles from './Footer.module.scss';

export interface FooterProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

function FooterComponent({ children, ...props }: FooterProps): JSX.Element {
  return (
    <footer className={styles.footer} {...props}>
      {children}
    </footer>
  );
}

FooterComponent.defaultProps = {
  children: undefined,
};

export const Footer = memo(FooterComponent);
