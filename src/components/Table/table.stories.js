import React from 'react';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'

export default { title: 'Table' };

import Table from "./table"


export const TableDemo = () => {
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


    return (
        <div className="container">
            <Table id="table-test" columns={columns} rows={rows} />
        </div>
    )
}