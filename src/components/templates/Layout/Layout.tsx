import { Footer } from 'components/atoms';
import React, { memo, ReactNode } from 'react';
import styles from './Layout.module.scss';

export interface LayoutProps {
  children: ReactNode;
}

function LayoutComponent({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

const propsAreEqual = (
  prevProps: LayoutProps,
  nextProps: LayoutProps
): boolean => {
  const propsToCompare: Array<keyof LayoutProps> = ['children'];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const Layout = memo(LayoutComponent, propsAreEqual);
