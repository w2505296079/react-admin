import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { Provider } from 'react-redux'
import store from '../src/util/store'
import Routers from '@/util/router'

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  )
}

export default App
