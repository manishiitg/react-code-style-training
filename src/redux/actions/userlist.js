const CALL_USER_LIST_API = "call_user_list_api"

const USER_API_LOADING = "user_list_api_loading"
const USER_API_SUCCESS = "user_list_api_success"
const USER_API_ERROR = "user_list_api_error"



export const USER_LIST_ACTIONS = {
    USER_API_LOADING,
    USER_API_SUCCESS,
    USER_API_ERROR,
    CALL_USER_LIST_API
}

export function apiLoadingAction() {
    return {
        type: USER_API_LOADING
    }
}
export function apiSuccessAction(userlist) {
    return {
        type: USER_API_SUCCESS,
        payload: userlist
    }
}
export function apiErrorAction(err) {
    return {
        type: USER_API_ERROR,
        payload: err.toString()
    }
}

export const callUserListApi = () => {
    return (dispatch, state) => {
        dispatch(apiLoadingAction())
        fetch("https://reqres.in/api/users?page=1")
            .then((data) => {
                return data.json().then((value) => {
                    if(value.hasOwnProperty("data")){
                        dispatch(apiSuccessAction(value.data))
                    }else{
                        throw value
                    }
                })
            }).catch((err) => {
                dispatch(apiErrorAction(err))
            })

    }
}