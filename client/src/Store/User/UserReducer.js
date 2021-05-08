import {SET_USER, REMOVE_USER } from './actions'

const initState = {
    user: {}
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case REMOVE_USER:
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}

export default userReducer