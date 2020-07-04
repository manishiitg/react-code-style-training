import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


import Dropdown from "./dropdown"

test('dropdown renders properly', () => {

    let options = [
        {
            "text": "Dropdown1",
            "value": "1"
        },
        {
            "text": "DropDown2",
            "value": "2"
        }
    ]
    let mockOnChange = jest.fn(evt => evt.target.value)

    let dropdown = <Dropdown options={options} onChange={mockOnChange} />

    let { container, getByRole } = render(dropdown)

    let element = getByRole("combobox")

    expect(element).toBeInTheDocument()

    userEvent.selectOptions(element, ["1"])

    expect(mockOnChange).toBeCalled()

    expect(mockOnChange.mock.results[0].value).toBe("1")

    userEvent.selectOptions(element, ["2"])

    expect(element).toHaveValue("2")
})