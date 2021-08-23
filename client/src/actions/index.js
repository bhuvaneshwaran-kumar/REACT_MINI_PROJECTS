export const SET_USER = 'set_user';
export const UPDATE_ACCESS_TOKEN = 'update_access_token';

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const updateUserAccessToken = (accessToken) => {
    return {
        TYPE: UPDATE_ACCESS_TOKEN,
        payload: accessToken
    }
}