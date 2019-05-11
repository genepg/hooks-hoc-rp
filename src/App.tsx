import React from 'react';
import './App.css';

import Hoc from './components/stateless/Hoc';
import RenderProps from './components/stateless/RenderProps';
import UseFunc from './components/stateless/UseFunc';

import OrgComp from './components/stateful/OrgComp';
import { CollatzHOC } from './components/stateful/hoc/CollatzHOC';
import { CollatzRenderProps } from './components/stateful/renderProps/CollatzRenderProps';
import { CollatzHooks } from './components/stateful/hooks/CollatzHooks';

export interface NameAndNumber {
  name: string,
  number: number 
}

const App: React.FC = () => {
  return (
    <>
      <h1>Hoc</h1>
      <Hoc name="Michelle" number={10} />
      <h1>RenderProps</h1>
      <RenderProps name="Michelle" number={10} />
      <h1>Stateless Just Use Function </h1>
      <UseFunc name="Michelle" number={10} />
      <p> ================ stateful ================ </p>
      <OrgComp/>
      <CollatzHOC/>
      <CollatzRenderProps/>
      <CollatzHooks/>
    </>
  );
}

export default App;
