import React from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from '@/view/main';
import Login from '@/view/login';
// const Home = React.lazy(() => import('@/view/home'))
// const Login = React.lazy(() => import('@/view/login'))

const mapStateToProps = state => {
  return {
    userInfo: state,
  };
};

const Routers = props => {
  const { loginState } = props.userInfo;
  return (
    <BrowserRouter>
      <Route
        exact={true}
        path="/**"
        render={props => {
          return loginState ? (
            <Main {...props} />
          ) : (
            <Redirect to={'/login'} props={props}></Redirect>
          );
        }}
      />
      <Route
        exact={true}
        path="/login"
        render={props => {
          return loginState ? (
            <Redirect to={'/'} props={props}></Redirect>
          ) : (
            <Login {...props}></Login>
          );
        }}
      />
    </BrowserRouter>
  );
};

export default connect(mapStateToProps)(Routers);
