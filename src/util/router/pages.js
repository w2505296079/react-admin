import React, { Suspense } from 'react'
import { Spin } from 'antd'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = React.lazy(() => import('@/view/pages/home'))
const About = React.lazy(() => import('@/view/pages/About'))
const Theta = React.lazy(() => import('@/view/pages/charts/theta'))
const Area = React.lazy(() => import('@/view/pages/charts/area'))

const mapStateToProps = (state) => {
  return {
    userInfo: state,
  }
}

const Pages = (props) => {
  return (
    <Suspense fallback={<Spin style={{ margin: '0 50%' }} tip="Loading..." />}>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={(props) => {
            return <Home {...props} />
          }}
        />
        <Route
          exact={true}
          path="/about"
          render={(props) => {
            return <About {...props} />
          }}
        />
        <Route
          exact={true}
          path="/charts/theta"
          render={(props) => {
            return <Theta {...props} />
          }}
        />
        <Route
          exact={true}
          path="/charts/area"
          render={(props) => {
            return <Area {...props} />
          }}
        />
      </Switch>
    </Suspense>
  )
}

export default connect(mapStateToProps)(Pages)
