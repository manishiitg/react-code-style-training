import { USER_LIST_ACTIONS } from "../actions/userlist"

const reducer = (data = {
    "loading": false,
    "data": {},
    "errormsg": ""
}, action) => {
    if (action.type === USER_LIST_ACTIONS.USER_API_LOADING) {
        return {
            "loading": true,
            "data": {},
            "errormsg": ""
        }
    } else if (action.type === USER_LIST_ACTIONS.USER_API_ERROR) {
        return Object.assign({}, {
            "loading": false,
            "data": {},
            "errormsg": action.payload
        })
    } else if (action.type === USER_LIST_ACTIONS.USER_API_SUCCESS) {
        return Object.assign({}, {
            "loading": false,
            "data": action.payload,
            "errormsg": ""
        })
    }

    return data
}


export default reducer