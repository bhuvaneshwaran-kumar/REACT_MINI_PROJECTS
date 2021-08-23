import { SET_USER, UPDATE_ACCESS_TOKEN } from '../actions/index'
const initialState = null

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload
        case UPDATE_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            }
        default:
            return state
    }
}

export default reducer

