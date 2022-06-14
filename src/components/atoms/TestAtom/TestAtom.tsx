import React, { memo } from 'react';
import styles from './TestAtom.module.scss';

export interface TestAtomProps {}

function TestAtomComponent({}: TestAtomProps): JSX.Element { 
return (<>
</>);
}
export const TestAtom = memo(TestAtomComponent);
