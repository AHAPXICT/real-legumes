export const SET_CATEGORIES = 'CATEGORY/SET_CATEGORIES'
export const INPUT_VALUE = 'CATEGORY/INPUT_VALUE'

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}

export const updateInputValue = (text) => {
    return {
        type: INPUT_VALUE,
        payload: text
    }
}
