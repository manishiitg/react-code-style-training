import React from "react"

import { connect } from 'react-redux'


import Table from "../../components/Table/table"

const UserList = () => {
    let columns = ["id", "email", "first_name", "last_name", "avatar"]
    let rows = [
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
        <Table id="userlist" columns={columns} rows={rows}>

        </Table>
    )
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)
