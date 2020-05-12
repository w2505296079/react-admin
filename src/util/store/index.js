import { createStore } from 'redux'
import user from './user'

// const rootReducer = combineReducers(user)
const store = createStore(user)
export default store
