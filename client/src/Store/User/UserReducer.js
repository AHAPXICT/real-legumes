import {SET_USER, REMOVE_USER, SET_TOKEN } from './actions'

const initState = {
    loggedIn: false,
    user: {},
    token: ''
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
                loggedIn: true
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default userReducer