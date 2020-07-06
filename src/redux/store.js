import { createStore, applyMiddleware, combineReducers } from 'redux'


import userlist from './reducer/userlist'


import thunk from 'redux-thunk';

export default createStore(combineReducers({
    userlist
}), {}, applyMiddleware(thunk))
