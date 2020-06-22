import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { Provider } from 'react-redux'
<<<<<<< HEAD
=======
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
import store from '../src/util/store'
import Routers from '@/util/router'

function App() {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <Routers />
=======
      {/* <PersistGate persistor={persistStore(store)}> */}
      <Routers />
      {/* </PersistGate> */}
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
    </Provider>
  )
}

export default App
