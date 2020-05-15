import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from '../src/util/store';
import Routers from '@/util/router';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routers></Routers>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
