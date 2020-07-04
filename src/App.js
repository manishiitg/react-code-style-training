import React from 'react';
import logo from './logo.svg';

import Button, { LargeButton } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button>Normal Button</Button>
      <LargeButton>large Button</LargeButton>
    </div>
  );
}

export default App;
