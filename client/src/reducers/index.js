import { combineReducers } from 'redux'
import userReducer from './userReduser'


const reducers = combineReducers({
    user: userReducer,
})

export default reducers
