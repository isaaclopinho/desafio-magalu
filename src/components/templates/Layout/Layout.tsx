import React, { memo } from 'react';
  import styles from './Layout.module.scss';

export interface LayoutProps {}

function LayoutComponent ({}: LayoutProps): JSX.Element {
return (<>
</>
);}

const propsAreEqual = (prevProps: LayoutProps, nextProps: LayoutProps): boolean => {
const propsToCompare: Array<keyof LayoutProps> = [];
return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const Layout = memo(LayoutComponent, propsAreEqual);
