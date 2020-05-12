import React from 'react'
// import logo from './logo.svg';
import './App.css'
import Router from '@/util/router'
import { Provider } from 'react-redux'
import store from '../src/util/store'

function App() {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  )
}

export default App
