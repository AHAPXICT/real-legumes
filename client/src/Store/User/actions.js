export const SET_USER = 'USER/SET_USER';
export const SET_TOKEN = 'USER/SET_TOKEN';
export const REMOVE_USER = 'USER/REMOVE_USER';

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}