import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import Home from './component/Home'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={Home} />
        </Router>
    </Provider>
  )
}

export default App