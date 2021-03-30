import { SET_PRODUCTS, CHANGE_INPUT_NAME_VALUE } from './actions'

const initState = {
    products: [],
    is_loading: false,
    input_name_field: '',
    input_price_field: 0,
    input_calories_field: 0,
    input_category_field: '',
    input_count_field: 0,
    input_description_field: '',
    product_images: [],
    product_ingredients: [],
    product_is_special: false,
    input_weight_field: '',
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case CHANGE_INPUT_NAME_VALUE:
            return {
                ...state,
                input_name_field: action.payload
            }
        default:
            return state;
    }
}

export default productReducer
