/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const fs = require('fs');

const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const kebabToPascalCase = (text) => {
  const parts = text.toLowerCase().split('-');

  return parts
    .map((word) => capitalizeFirstLetter(word))
    .join('');
};

const componentType = process.argv[2];
const componentName = process.argv[3];

const availableTypes = ['atom', 'molecule', 'organism', 'page', 'template'];

const defaultErrorMessage = `
Error. Correct usage is: npm run component [component type] [component name];

Available types: ${availableTypes.toString()};
`;

if (!availableTypes.includes(componentType) || !componentName) {
  console.log(defaultErrorMessage);
  process.exit(1);
}

const componentId = kebabToPascalCase(componentName);
const folderPath = `./src/components/${componentType}s/${componentId}`;

let componentFileTemplate = `import React, { memo } from 'react';

export interface ${componentId}Props {}

function ${componentId}Component({}: ${componentId}Props): JSX.Element { 
return (<>
</>);
}
export const ${componentId} = memo(${componentId}Component);
`;

if (['molecule', 'organism', 'page', 'template'].includes(componentType)) {
  componentFileTemplate = `import React, { memo } from 'react';

export interface ${componentId}Props {}

function ${componentId}Component ({}: ${componentId}Props): JSX.Element {
return (<>
</>
);}

const propsAreEqual = (prevProps: ${componentId}Props, nextProps: ${componentId}Props): boolean => {
const propsToCompare: Array<keyof ${componentId}Props> = [];
return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const ${componentId} = memo(${componentId}Component, propsAreEqual);
`;
}

if (['page'].includes(componentType)) {
  componentFileTemplate = `import React from 'react';
  
  export interface ${componentId}Props {}
  
  function ${componentId} ({}: ${componentId}Props): JSX.Element {
  return (<>
  </>
  );}
  
  
  export { ${componentId} };
  `;
}

const componentTestTemplate = `import React from 'react';
import { render } from '@testing-library/react';
import { ${componentId} } from './index';

it('renders correctly', () => {
const {} = render(<${componentId} />);
});
`;

const componentIndexTemplate = `export * from './${componentId}';
`;

fs.mkdirSync(folderPath);
fs.writeFileSync(`${folderPath}/${componentId}.tsx`, componentFileTemplate);
fs.writeFileSync(`${folderPath}/${componentId}.tsx`, componentFileTemplate);
fs.writeFileSync(`${folderPath}/${componentId}.spec.tsx`, componentTestTemplate);
fs.writeFileSync(`${folderPath}/index.ts`, componentIndexTemplate);
fs.appendFileSync(`./src/components/${componentType}s/index.ts`, `export * from './${componentId}';
`);
