import { SET_PRODUCTS } from './actions'

const initState = {
    products: [],
    is_loading: false
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default productReducer
