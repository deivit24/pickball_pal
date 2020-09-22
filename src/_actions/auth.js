import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from './types';
import { setAlert } from './alert';

import setAuthToken from '../_helpers/setAuthToken';
const BASE_URL = process.env.REACT_APP_BASE_URL;
//Load User

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${BASE_URL}/api/auth`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register User
export const register = ({ first_name, last_name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    password,
  });
  try {
    const res = await axios.post(`${BASE_URL}/api/users`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (e) {
    const errors = e.response.data.msg;
    console.log(errors);
    if (typeof errors === 'string') {
      dispatch(setAlert(errors, 'error'));
    } else {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    email,
    password,
  });
  try {
    const res = await axios.post(`${BASE_URL}/api/auth`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert('Welcome back!', 'success'));
  } catch (e) {
    const errors = e.response.data.msg;

    if (typeof errors === 'string') {
      dispatch(setAlert(errors, 'error'));
    } else {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// LOGOUT / CLEAR PROFILE

export const logout = (history) => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  history.push('/login');
};
