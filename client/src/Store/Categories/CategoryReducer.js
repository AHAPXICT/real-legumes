import { SET_CATEGORIES } from './actions'


const initialState = {
    categories: [],
    is_open_modal: false,
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
        default:
            return state;
    }
}

export default categoryReducer