import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

// Load User
export const loadUser = () => dispatch => {
  dispatch({ type: USER_LOADING });

  axios.get('/api/users/user')
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  axios.post('/api/users/login', { email, password })
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => dispatch => {
  axios.post('/api/users/logout')
    .then(() => dispatch({
      type: LOGOUT_SUCCESS
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Register User
export const register = ({ username, email, password }) => dispatch => {
  axios.post('/api/users/register', { username, email, password })
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
