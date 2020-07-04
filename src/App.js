import React from 'react';

import Button, { LargeButton } from './components/Button/button';
import List from "./components/List/list"

import LayoutWith2Column from "./layout/2column-layout";

function App() {
  return (
    <div className="App">

      <LayoutWith2Column>

        <Button>Normal Button</Button>
        <LargeButton>large Button</LargeButton>


        <Button className="btn-primary">Primary bootstrap color</Button>

        <br />
        <br />
        <br />

        <List list={["hello", "world", "list1", "list2"]}>

        </List>

      </LayoutWith2Column>

    </div>
  );
}

export default App;
