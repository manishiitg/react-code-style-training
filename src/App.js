import React from 'react';
import logo from './logo.svg';

import Button, { LargeButton } from './components/Button/button';
import List from "./components/List/list"

function App() {
  return (
    <div className="App">
      <Button>Normal Button</Button>
      <LargeButton>large Button</LargeButton>

      <Button className="btn-primary">Primary bootstrap color</Button>

      <br/>
      <br/>
      <br/>

      <List list={["hello", "world", "list1", "list2"]}>

      </List>
    </div>
  );
}

export default App;
