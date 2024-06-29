import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'

import Home from './component/Home'
import Login from './component/Login'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        </Routes>
        </Router>
    </Provider>
  )
}

export default App