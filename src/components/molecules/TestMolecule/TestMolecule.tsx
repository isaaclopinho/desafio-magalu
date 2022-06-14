import React, { memo } from 'react';
  import styles from './TestMolecule.module.scss';

export interface TestMoleculeProps {}

function TestMoleculeComponent ({}: TestMoleculeProps): JSX.Element {
return (<>
</>
);}

const propsAreEqual = (prevProps: TestMoleculeProps, nextProps: TestMoleculeProps): boolean => {
const propsToCompare: Array<keyof TestMoleculeProps> = [];
return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const TestMolecule = memo(TestMoleculeComponent, propsAreEqual);
