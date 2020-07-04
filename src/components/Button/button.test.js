import React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


import Button, { LargeButton } from "./button"

test('button renders properly', () => {

    const mockClick = jest.fn()

    let button = <Button onClick={mockClick}>Test Button</Button>
    const { getByText } = render(button)

    const element = getByText("Test Button")
    expect(element).toBeInTheDocument()

    userEvent.click(element)

    expect(mockClick.mock.calls.length).toBe(1)
})

test("large button", () => {
    const mockClick = jest.fn()
    let largebutton = <LargeButton onClick={mockClick}>Test Button</LargeButton>
    const { getByText } = render(largebutton)
    const element = getByText("Test Button")

    expect(element).toHaveStyle("font-size:2em")
})