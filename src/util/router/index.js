import React, { Suspense } from 'react'
import { Route, Redirect, BrowserRouter } from 'react-router-dom'
import { Spin } from 'antd'
import { connect } from 'react-redux'
const Main = React.lazy(() => import('@/view/main'))
const Login = React.lazy(() => import('@/view/login'))
// const Home = React.lazy(() => import('@/view/home'))
// const Login = React.lazy(() => import('@/view/login'))

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const Routers = (props) => {
  console.log('props', props)
  const { token } = props.user
  return (
    <Suspense fallback={<Spin style={{ margin: '0 50%' }} tip="Loading..." />}>
      <BrowserRouter>
        <Route
          exact={true}
          path="/*"
          render={(props) => {
            return token ? (
              <Main {...props} />
            ) : (
              <Redirect to={'/login'} props={props}></Redirect>
            )
          }}
        />
        <Route
          exact={true}
          path="/login"
          render={(props) => {
            return token ? (
              <Redirect to={'/'} props={props}></Redirect>
            ) : (
              <Login {...props}></Login>
            )
          }}
        />
      </BrowserRouter>
    </Suspense>
  )
}

export default connect(mapStateToProps)(Routers)
