export const SET_PRODUCTS = 'PRODUCT/SET_PRODUCTS'
export const CHANGE_INPUT_NAME_VALUE = 'PRODUCT/CHANGE_INPUT_NAME_VALUE'

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
