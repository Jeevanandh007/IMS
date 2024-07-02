import React from 'react';
import { useSelector } from 'react-redux';


const Profile = ({ makeFirstLetterCapital }) => {
    const { user } = useSelector(state => state.auth);
  
    return (
      <div className='container mt-5'>
        <h2 className='d-inline-block mr-2 text-primary'>User Profile</h2>
        <span className='alert alert-info'>Profile details and settings</span>
        <hr />
        {user ? (
          <>
            <h4 className='text-success'>Welcome, {makeFirstLetterCapital(user.username)}!</h4>
            <p>Your registered email: <span className='font-weight-bold'>{user.email}</span></p>
            <p className='text-muted'>Member since: <span className='font-weight-bold'>2024</span></p>
            <p className='text-muted'>Account type: <span className='font-weight-bold'>Premium</span></p>
          </>
        ) : (
          <p className='text-danger'>User information is not available at the moment.</p>
        )}
      </div>
    );
  };
  
  export default Profile;
  