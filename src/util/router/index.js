import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '@/view/home'
import Login from '@/view/login'
// const Home = React.lazy(() => import('@/view/home'))
// const Login = React.lazy(() => import('@/view/login'))

export default () => (
  <BrowserRouter>
    <Route
      exact={true}
      path="/"
      render={(props) => {
        return <Home {...props}></Home>
      }}
    />
    <Route
      exact={true}
      path="/login"
      render={(props) => {
        return <Login {...props}></Login>
      }}
    />
  </BrowserRouter>
)
