export const SET_USER = 'USER/SET_USER';
export const REMOVE_USER = 'USER/REMOVE_USER';

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}