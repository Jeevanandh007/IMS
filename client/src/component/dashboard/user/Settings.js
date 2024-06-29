import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <div className='container mt-5'>
      <h2 className='d-inline-block mr-3 text-info'>Account Settings</h2>
      <span className='alert alert-secondary'>You can update your account information here</span>
      <hr />
      <h4 className='text-primary'>Edit Your Account Details</h4>
      <br />
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div className="form-group">
          <label htmlFor="username" className='text-muted'>Username</label>
          <input
            type="text"
            name="username"
            className="form-control border-primary"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className='text-muted'>Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control border-primary"
            aria-describedby="emailHelp"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='text-muted'>Password</label>
          <input
            type="password"
            name="password"
            className="form-control border-primary"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-info btn-block">Update</button>
      </form>
    </div>
  );
};

export default Settings;
