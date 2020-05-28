import { createStore, combineReducers } from 'redux'
import user from './user'

// // 我要对哪些state做数据持久化
// const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2,
// }

// // 单独为 某个 reduce 做数据持久化
// const myPersistReducer = combineReducers({
//   userInfo: persistReducer(
//     //单独为user这个数据做持久化
//     rootPersistConfig,
//     userInfo,
//   ),
// })

// const rootReducer = combineReducers(user)
// const store = createStore(myPersistReducer)

const store = createStore(user)
export default store
