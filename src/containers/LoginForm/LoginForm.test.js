import React from 'react'
import { render, fireEvent, waitFor, screen, getByText } from '@testing-library/react'

import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import LoginForm from "./LoginForm"
import { element } from 'prop-types'

test("login form to render", () => {
    const { container, getByText } = render(<LoginForm />)

    expect(getByText("User Name")).toBeInTheDocument()
    expect(getByText("Password")).toBeInTheDocument()
    expect(getByText("Submit")).toBeInTheDocument()

    let usernameEle = container.querySelector("input[id=username]")
    let passwordEle = container.querySelector("input[id=password]")

    userEvent.type(usernameEle, "username")
    userEvent.type(passwordEle, "123")
    userEvent.click(getByText("Submit"))

    //need some ui updates or api calls or redux state updates to test if form submits
})