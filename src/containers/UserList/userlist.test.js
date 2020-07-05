import React from 'react'
import { render } from '../../test-util'

import { waitFor } from '@testing-library/react'


import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import UserList from "./userlist"

import { rest } from 'msw'
import { setupServer } from 'msw/node'

// https://mswjs.io/docs/

const apiresponse = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
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
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ],
    "ad": {
        "company": "StatusCode Weekly",
        "url": "http://statuscode.org/",
        "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
    }
}

const server = setupServer(
    rest.get('https://reqres.in/api/users', (req, res, ctx) => {

        return res(
            // ctx.delay(1000), optional. don't use unless its requried to delay the api. as it slows down test
            ctx.json(apiresponse)
        )
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("userlist renders properly", () => {
    let { container, getByText } = render(<UserList />)

    let button = getByText("Call API")
    expect(button).toBeInTheDocument() // we have button showing

    expect(container.querySelectorAll("table > tbody > tr").length).toBe(0) // we have empty table

})

test("userlist click calls api and shows loading", async () => {
    let { container, getByText, queryByText } = render(<UserList />)

    let button = getByText("Call API")

    userEvent.click(button)

    expect(getByText("loading..")).toBeInTheDocument() //on button click we should have loading

    expect(button).not.toBeInTheDocument()


    //we should wait for api response to be rendered
    await waitFor(() =>
        expect(container.querySelectorAll("tbody > tr").length).toBeGreaterThan(1)
    )


    //then we check if table was rendered properly
    expect(container.querySelectorAll("tbody > tr").length).toBe(apiresponse['data'].length)

    expect(queryByText("loading..")).toBeNull()  //loading show go away
    expect(getByText("Call API")).toBeInTheDocument() //button should show again
})

test("userlist click calls api shows error message properly", async () => {

    server.use(
        rest.get('*/api/users', (req, res, ctx) => {
            return res(ctx.status(500), ctx.json("error simulated"))
        })
    )

    let { container, getByText , queryByText } = render(<UserList />)

    let button = getByText("Call API")

    userEvent.click(button)

    expect(getByText("loading..")).toBeInTheDocument() //on button click we should have loading

    expect(button).not.toBeInTheDocument()


    //we should wait for api response to be rendered in this case error mesage
    await waitFor(() =>
        expect(getByText("error simulated")).toBeInTheDocument()
    )

    expect(queryByText("loading..")).toBeNull()  //loading show go away
    expect(getByText("Call API")).toBeInTheDocument() //button should show again

})