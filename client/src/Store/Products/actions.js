export const SET_PRODUCTS = 'PRODUCT/SET_PRODUCTS'

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}
