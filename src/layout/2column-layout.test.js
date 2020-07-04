import React from 'react'
import { render, fireEvent, waitFor, screen, getByText } from '@testing-library/react'

import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import LayoutWith2Column from "./2column-layout"

import LoginForm from "../containers/LoginForm/LoginForm"

test("2 column layout shows properly", () => {

    let ele = <LayoutWith2Column>  <LoginForm /> </LayoutWith2Column>

    const { container, getByTestId } = render(ele)

    expect(getByTestId("loginform")).toBeInTheDocument()

})

test("2 column layout shows right bar properly", () => {

    let ele = <LayoutWith2Column side_column_component={<LoginForm />}>  <> </> </LayoutWith2Column>

    const { container, getByTestId } = render(ele)

    expect(getByTestId("loginform")).toBeInTheDocument()

})