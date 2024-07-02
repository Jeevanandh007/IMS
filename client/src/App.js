
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'

import Home from './component/Home'
import Login from './component/Login'
import Register from  './component/Register';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        </Routes>
        </Router>
    </Provider>
  )
}

export default App