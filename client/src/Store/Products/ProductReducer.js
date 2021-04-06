import { SET_PRODUCTS,
    CHANGE_INPUT_NAME_VALUE, 
    CHANGE_INPUT_DESCRIPTION_VALUE, 
    CHANGE_INPUT_PRICE_VALUE, 
    CHANGE_INPUT_CALORIES_VALUE,
    CHANGE_INPUT_COUNT_VALUE,
    CHANGE_INPUT_WEIGHT_VALUE,
    CHANGE_IS_SPECIAL_VALUE,
    CHANGE_CATEGORY_VALUE,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    CLEAR_INGREDIENTS
} from './actions'

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
    input_weight_field: 0,
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
        case CHANGE_INPUT_DESCRIPTION_VALUE:
            return {
                ...state,
                input_description_field: action.payload
            }
        case CHANGE_INPUT_PRICE_VALUE:
            return {
                ...state,
                input_price_field: action.payload
            }
        case CHANGE_INPUT_CALORIES_VALUE:
            return {
                ...state,
                input_calories_field: action.payload
            }
        case CHANGE_INPUT_COUNT_VALUE:
            return {
                ...state,
                input_count_field: action.payload
            }
        case CHANGE_INPUT_WEIGHT_VALUE:
            return {
                ...state,
                input_weight_field: action.payload
            }
        case CHANGE_IS_SPECIAL_VALUE:
            return {
                ...state,
                product_is_special: action.payload
            }
        case CHANGE_CATEGORY_VALUE:
            return {
                ...state,
                input_category_field: action.payload
            }
        case ADD_INGREDIENT: {
            const new_product_ingredients = state.product_ingredients.concat(action.payload)
            return {
                ...state,
                product_ingredients: new_product_ingredients
            }
        }
        case DELETE_INGREDIENT: {
            const new_product_ingredients = state.product_ingredients.filter(ingredient => ingredient.name !== action.payload)
            return {
                ...state,
                product_ingredients: new_product_ingredients
            }
        }
        case CLEAR_INGREDIENTS: {
            return {
                ...state,
                product_ingredients: []
            }
        }
        default:
            return state;
    }
}

export default productReducer
