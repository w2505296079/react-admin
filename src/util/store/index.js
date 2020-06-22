<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import user from './reducers/user'
import counter from './reducers/counter'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const middlewares = [thunkMiddleware]

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

const rootReducer = combineReducers({ user, counter })
// const store = createStore(myPersistReducer)

const store = createStore(rootReducer, enhancer)
=======
import { createStore, combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
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
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
export default store
