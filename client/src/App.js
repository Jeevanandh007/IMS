
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'

import Home from './component/Home'
import Login from './component/Login'
import Register from  './component/Register'
import Dashboard from './component/dashboard/Dashboard'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
        </Router>
    </Provider>
  )
}

export default App