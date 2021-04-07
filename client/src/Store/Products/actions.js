export const SET_PRODUCTS = 'PRODUCT/SET_PRODUCTS'
export const CHANGE_INPUT_NAME_VALUE = 'PRODUCT/CHANGE_INPUT_NAME_VALUE'
export const CHANGE_INPUT_DESCRIPTION_VALUE = 'PRODUCT/CHANGE_INPUT_DESCRIPTION_VALUE'
export const CHANGE_INPUT_PRICE_VALUE = 'PRODUCT/CHANGE_INPUT_PRICE_VALUE'
export const CHANGE_INPUT_CALORIES_VALUE = 'PRODUCT/CHANGE_INPUT_CALORIES_VALUE'
export const CHANGE_INPUT_COUNT_VALUE = 'PRODUCT/CHANGE_INPUT_COUNT_VALUE'
export const CHANGE_INPUT_WEIGHT_VALUE = 'PRODUCT/CHANGE_INPUT_WEIGHT_VALUE'
export const CHANGE_IS_SPECIAL_VALUE = 'PRODUCT/CHANGE_IS_SPECIAL_VALUE'
export const CHANGE_CATEGORY_VALUE = 'PRODUCT/CHANGE_CATEGORY_VALUE'
export const ADD_INGREDIENT = 'PRODUCT/ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'PRODUCT/DELETE_INGREDIENT'
export const CLEAR_INGREDIENTS = 'PRODUCT/CLEAR_INGREDIENTS'
export const SET_TITLE_IMG = 'PRODUCT/SET_TITLE_IMG'
export const SET_ADDITIONAL_IMAGES = 'PRODUCT/SET_ADDITIONAL_IMAGES'

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const updateInputNameValue = (text) => {
    return {
        type: CHANGE_INPUT_NAME_VALUE,
        payload: text
    }
}

export const updateInputDescriptionValue = (text) => {
    return {
        type: CHANGE_INPUT_DESCRIPTION_VALUE,
        payload: text
    }
}

export const updateInputCaloriesValue = (calories) => {
    return {
        type: CHANGE_INPUT_CALORIES_VALUE,
        payload: calories
    }
}

export const updateInputCountValue = (count) => {
    return {
        type: CHANGE_INPUT_COUNT_VALUE,
        payload: count
    }
}

export const updateInputWeigthValue = (weigth) => {
    return {
        type: CHANGE_INPUT_WEIGHT_VALUE,
        payload: weigth
    }
}

export const updateInputPriceValue = (price) => {
    return {
        type: CHANGE_INPUT_PRICE_VALUE,
        payload: price
    }
}

export const updateIsSpecialValue = (is_spesial) => {
    return {
        type: CHANGE_IS_SPECIAL_VALUE,
        payload: is_spesial
    }
}

export const updateCategoryValue = (category_name) => {
    return {
        type: CHANGE_CATEGORY_VALUE,
        payload: category_name
    }
}

export const addIngredient = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        payload: ingredient
    }
}

export const deleteIngredient = (ingredient_name) => {
    return {
        type: DELETE_INGREDIENT,
        payload: ingredient_name
    }
}

export const clearIngredients = () => {
    return {
        type: CLEAR_INGREDIENTS
    }
}

export const setTitleImg = (image) => {
    return {
        type: SET_TITLE_IMG,
        payload: image
    }
}

export const setAdditionalImages = (images) => {
    return {
        type: SET_ADDITIONAL_IMAGES,
        payload: images
    }
}
