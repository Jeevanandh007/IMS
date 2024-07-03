import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/authActions'

import Settings  from './user/Settings'


const Dashboard = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const makeFirstLetterCapital = str => {
        const withoutFirstLetter = str.substring(1);
        const updated = str.charAt(0).toUpperCase().concat(withoutFirstLetter);
    
        return updated;
      }
      