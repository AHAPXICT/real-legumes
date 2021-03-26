export const SET_CATEGORIES = 'CATEGORY/SET_CATEGORIES'
export const ADD_CATEGORY = 'CATEGORY/ADD_CATEGORY'
export const INPUT_VALUE = 'CATEGORY/INPUT_VALUE'

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}

export const addCategory = (category) => {
    return {
        type: ADD_CATEGORY,
        payload: category
    }
}

export const updateInputValue = (text) => {
    return {
        type: INPUT_VALUE,
        payload: text
    }
}
