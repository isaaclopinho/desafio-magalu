import React, { memo } from 'react';
  import styles from './TestTemplate.module.scss';

export interface TestTemplateProps {}

function TestTemplateComponent ({}: TestTemplateProps): JSX.Element {
return (<>
</>
);}

const propsAreEqual = (prevProps: TestTemplateProps, nextProps: TestTemplateProps): boolean => {
const propsToCompare: Array<keyof TestTemplateProps> = [];
return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const TestTemplate = memo(TestTemplateComponent, propsAreEqual);
