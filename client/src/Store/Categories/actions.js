export const SET_CATEGORIES = 'CATEGORY/SET_CATEGORIES'

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}
