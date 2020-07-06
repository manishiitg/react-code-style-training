import React from "react"

import { connect } from 'react-redux'

import { callUserListApi } from "./../../redux/actions/userlist"

import PropTypes from "prop-types"

import Table from "@bit/manishiitg.reusable-training.table"
import Button from "../../components/Button/button"

const UserList = ({ userlist, callApi }) => {
    let columns = ["id", "email", "first_name", "last_name", "avatar"]

    return (
        <>
            <Table id="userlist" columns={columns} rows={userlist.data} />

            {userlist.loading ? "loading.." : <Button onClick={callApi} className="btn-primary">Call API</Button>}

            {userlist.errormsg}

        </>
    )
}

UserList.propTypes = {
    callApi: PropTypes.func.isRequired,
    userlist: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            email: PropTypes.string.isRequired,
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired
        })),
        loading: PropTypes.bool.isRequired,
        errormsg: PropTypes.string.isRequired
    })
}


const mapStateToProps = (state) => {
    return {
        userlist: state.userlist

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callApi: () => {
            dispatch(callUserListApi())
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)
