import { SET_CATEGORIES, INPUT_VALUE } from './actions'


const initialState = {
    categories: [],
    is_loading: false,
    input_name_field: '' 
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case INPUT_VALUE:
            return {
                ...state,
                input_name_field: action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer