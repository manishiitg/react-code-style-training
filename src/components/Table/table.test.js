import React from 'react'
import { render, fireEvent, waitFor, screen, getByText, getByRole, getAllByRole } from '@testing-library/react'

import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Table from "./table"



test("table renders properly", () => {
    const columns = ["id", "email", "first_name", "last_name", "avatar"]
    const rows = [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        }
    ]

    const tableEle = <Table id="table-test" columns={columns} rows={rows} />

    const { container, getByTestId, getByRole, getAllByRole } = render(tableEle)

    const renderEle = getByTestId("table-test")
    expect(renderEle).toBeInTheDocument()
    expect(container.querySelectorAll("tbody > tr").length).toBe(rows.length)
    expect(container.querySelectorAll("thead").length).toBe(1)

    expect(container.querySelectorAll("thead > tr > th").length).toBe(columns.length)

    /** can also add more test like checking if value is disabled etc. but its not of much use. */
    /** better to add more test cases to containers */

    /** we should add more ui level test cases here, but there no ui here like hide/show or clicking or loading etc. so not needed */

})