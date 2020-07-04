import React from 'react'
import { render, fireEvent, waitFor, screen, getByText } from '@testing-library/react'

import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import InputText from "./input"

test("input renders properly", () => {
    let mockCallback = jest.fn((x) => x)

    let input = <InputText id="123" callback={mockCallback} type="text" />

    const { getByRole } = render(input)

    let element = getByRole("textbox")

    expect(element).toBeInTheDocument()

    expect(element).toHaveAttribute("type", "text")

    userEvent.type(element, "123")

    expect(mockCallback).toBeCalledWith("123")

    expect(mockCallback).toBeCalledTimes(3)

    expect(mockCallback.mock.results[2].value).toBe("123")

})

test("input type for password and other types", () => {

    let input = <InputText id="123" type="password" />

    const { container } = render(input)

    let element = container.querySelector("input")

    expect(element).toBeInTheDocument()

    expect(element).toHaveAttribute("type", "password")

})