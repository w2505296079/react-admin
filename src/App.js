import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import store from '../src/util/store'
import Routers from '@/util/router'

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistStore(store)}> */}
      <Routers />
      {/* </PersistGate> */}
    </Provider>
  )
}

export default App
