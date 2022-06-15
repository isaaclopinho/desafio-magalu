import React, { memo, ReactNode } from 'react';
import styles from './Header.module.scss';

export interface HeaderProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

function HeaderComponent({ children, ...props }: HeaderProps): JSX.Element {
  return <header {...props}>{children}</header>;
}

HeaderComponent.defaultProps = {
  children: undefined,
};

export const Header = memo(HeaderComponent);
