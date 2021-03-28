import {SET_INGREDIENTS, CHANGE_INPUT_VALUE} from './actions'

const initialState = {
    ingredients: [],
    input_name_field: '',
    is_loading: false,
}

const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload
            }
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                input_name_field: action.payload
            }
        default:
            return state;
    }
}

export default ingredientReducer