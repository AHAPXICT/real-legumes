export const SET_INGREDIENTS = 'INGREDIENT/SET_INGREDIENTS'
export const CHANGE_INPUT_VALUE = 'INGREDIENT/CHANGE_INPUT_VALUE'

export const setIngredients = (name) => {
    return {
        type: SET_INGREDIENTS,
        payload: name
    }
}

export const updateInputValue = (text) => {
    return {
        type: CHANGE_INPUT_VALUE,
        payload: text
    }
}
