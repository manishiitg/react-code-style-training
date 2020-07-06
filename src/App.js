import React from 'react';

import Button, { LargeButton } from './components/Button/button';
import List from "./components/List/list"

import LayoutWith2Column from "./layout/2column-layout";

import { ThemeProvider } from "styled-components";

import theme from "./theme"

import InputText, { InputWithLabel } from "./components/InputText/input"

import LoginForm from "./containers/LoginForm/LoginForm"

import { Provider } from 'react-redux'
import store from './redux/store'

import UserList from "./containers/UserList/userlist"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">

          <LayoutWith2Column side_column_component={null}>
            <>
              <UserList />
              {/* <Button>Normal Button</Button>
              <LargeButton onClick={() => { }}>large Button</LargeButton>

              <InputText id="email" />

              <InputWithLabel id="email2" label="Email Address" />

              <InputWithLabel id="email2" label="Email Address" help="Put in your email address" />


              <Button className="btn-primary">Primary bootstrap color</Button>

              <br />
              <br />
              <br />

              <List list={["hello", "world", "list1", "list2"]}>

              </List> */}
            </>

          </LayoutWith2Column>

        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
