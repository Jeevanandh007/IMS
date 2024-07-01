import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/authActions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  
  return (
    auth.isAuthenticated
      ? <Navigate to={{ pathname: '/dashboard' }} />
      : <div className='container mt-5' style={{ maxWidth: '400px' }}>
        <h2 className='text-success'>Sign In</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className='text-primary'>Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control border-info"
              aria-describedby="emailHelp"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              Your email is safe with us.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password" className='text-primary'>Password</label>
            <input
              type="password"
              className="form-control border-info"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-info btn-block">Login</button>
        </form>
        <Link className="btn btn-secondary btn-sm mt-4" to="/">&larr; Back to Home</Link>
      </div>
  );
};
export default Login;
