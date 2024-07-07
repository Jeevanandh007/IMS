import axios from "axios";

import { toast } from "react-toastify";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";
import { toastException, toastSuccess } from "../helpers";

// Load User
export const loadUser = () => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await axios.get("/api/users/user");

    dispatch({
      type: USER_LOADED,
      payload: response.data,
    });
  } catch (exception) {
    toastException(exception);

    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (exception) {
      toastException(exception);
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.post("/api/users/logout");

    dispatch({
      type: LOGOUT_SUCCESS,
    });

    toastSuccess("Successfully logged out");
  } catch (exception) {
    toastException(exception);
  }
};

// Register User
export const register =
  ({ username, email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post("/api/users/register", {
        username,
        email,
        password,
      });

      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
    } catch (exception) {
      dispatch({
        type: REGISTER_FAIL,
      });

      toastException(exception);
    }
  };
