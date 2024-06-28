import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/authActions';


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(register({ username, email, password }));
    };
  