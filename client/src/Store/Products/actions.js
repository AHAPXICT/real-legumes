export const SET_PROPDUCTS = 'PRODUCT/SET_PRODUCTS'

export const setProducts = (products) => {
    return {
        acion: SET_PROPDUCTS,
        payload: products
    }
}
