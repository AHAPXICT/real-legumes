export const SET_PRODUCTS = 'PRODUCT/SET_PRODUCTS'
export const CHANGE_INPUT_NAME_VALUE = 'PRODUCT/CHANGE_INPUT_NAME_VALUE'
export const CHANGE_INPUT_DESCRIPTION_VALUE = 'PRODUCT/CHANGE_INPUT_DESCRIPTION_VALUE'
export const CHANGE_INPUT_PRICE_VALUE = 'PRODUCT/CHANGE_INPUT_PRICE_VALUE'
export const CHANGE_INPUT_CALORIES_VALUE = 'PRODUCT/CHANGE_INPUT_CALORIES_VALUE'
export const CHANGE_INPUT_COUNT_VALUE = 'PRODUCT/CHANGE_INPUT_COUNT_VALUE'
export const CHANGE_INPUT_WEIGHT_VALUE = 'PRODUCT/CHANGE_INPUT_WEIGHT_VALUE'
export const CHANGE_IS_SPECIAL_VALUE = 'PRODUCT/CHANGE_IS_SPECIAL_VALUE'

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
