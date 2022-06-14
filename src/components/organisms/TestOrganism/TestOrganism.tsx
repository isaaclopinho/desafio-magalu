import React, { memo } from 'react';
  import styles from './TestOrganism.module.scss';

export interface TestOrganismProps {}

function TestOrganismComponent ({}: TestOrganismProps): JSX.Element {
return (<>
</>
);}

const propsAreEqual = (prevProps: TestOrganismProps, nextProps: TestOrganismProps): boolean => {
const propsToCompare: Array<keyof TestOrganismProps> = [];
return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const TestOrganism = memo(TestOrganismComponent, propsAreEqual);
