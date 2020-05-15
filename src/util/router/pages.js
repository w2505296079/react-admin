import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import About from '@/view/pages/About';
import Home from '@/view/pages/Home';
// const Home = React.lazy(() => import('@/view/home'))
// const Login = React.lazy(() => import('@/view/login'))

const mapStateToProps = state => {
  return {
    userInfo: state,
  };
};

const Pages = props => {
  return (
    <Switch>
      <Route
        exact={true}
        path="/"
        render={props => {
          return <Home {...props} />;
        }}
      />
      <Route
        exact={true}
        path="/about"
        render={props => {
          return <About {...props} />;
        }}
      />
    </Switch>
  );
};

export default connect(mapStateToProps)(Pages);
