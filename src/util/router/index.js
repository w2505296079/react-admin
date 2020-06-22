import React, { Suspense } from 'react'
<<<<<<< HEAD
import { Route, Redirect, BrowserRouter } from 'react-router-dom'
=======
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
import { Spin } from 'antd'
import { connect } from 'react-redux'
const Main = React.lazy(() => import('@/view/main'))
const Login = React.lazy(() => import('@/view/login'))
// const Home = React.lazy(() => import('@/view/home'))
// const Login = React.lazy(() => import('@/view/login'))

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    user: state.user,
=======
    userInfo: state,
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
  }
}

const Routers = (props) => {
<<<<<<< HEAD
  console.log('props', props)
  const { token } = props.user
=======
  const { token } = props.userInfo
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
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
