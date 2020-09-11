import axios from 'axios';

import { setAlert } from './alert';
import {
  GET_PROFILE,
  GET_MESSAGES,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  DELETE_ACCOUNT,
  NEW_CONVERSATION,
  POST_MESSAGES,
} from './types';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/profile/me`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (e) {
    // Add this
    dispatch({ type: CLEAR_PROFILE });
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

export const getMessages = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/profile/messages`);
    dispatch({
      type: GET_MESSAGES,
      payload: res.data,
    });
  } catch (e) {
    // Add this
    dispatch({ type: CLEAR_PROFILE });
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//New Conversation

export const newConversation = (id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/profile/user/${id}/conversation`
    );
    dispatch({
      type: NEW_CONVERSATION,
      payload: res.data,
    });
    dispatch(setAlert('New Conversation Created', 'success'));
  } catch (e) {
    const errors = e.response.data.msg;
    const urlError = e.response.data.error;

    if (typeof errors === 'string') {
      dispatch(setAlert(errors, 'success'));
    }
    if (urlError.code) {
      dispatch(setAlert(`'${urlError.input}' is an invalid url`, 'error'));
    }
    if (errors === undefined) {
      dispatch(setAlert('error', 'error'));
    }
  }
};

export const postMessage = (id, formData) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/profile/${id}`, formData);

    dispatch({
      type: POST_MESSAGES,
      payload: res.data,
    });

    if (res) {
      const response = await axios.get(`${BASE_URL}/api/profile/messages`);
      dispatch({
        type: GET_MESSAGES,
        payload: response.data,
      });
    }

    dispatch(setAlert('Message Sent', 'success'));
  } catch (e) {
    if (e.response === undefined) {
      dispatch(setAlert(e.response, 'error'));
    } else {
      const errors = e.response.data.msg;

      const urlError = e.response.data.error;

      if (typeof errors === 'string') {
        dispatch(setAlert(errors, 'error'));
      }
      if (urlError.code) {
        dispatch(setAlert(`'${urlError.input}' is an invalid url`, 'error'));
      }
      if (errors === undefined) {
        dispatch(setAlert(errors, 'error'));
      }
    }
  }
};

//Get all Profiles
export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get(
      `${BASE_URL}/api/profile${window.location.search}`
    );
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (e) {
    // Add this
    dispatch({ type: CLEAR_PROFILE });
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Get all Profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/profile/user/${userId}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (e) {
    // Add this
    dispatch({ type: CLEAR_PROFILE });
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

// Create or Update Profile

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`${BASE_URL}/api/profile`, formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (e) {
    const errors = e.response.data.msg;
    const urlError = e.response.data.error;

    if (typeof errors === 'string') {
      dispatch(setAlert(errors, 'error'));
    }
    if (urlError.code) {
      dispatch(setAlert(`'${urlError.input}' is an invalid url`, 'error'));
    }
    if (errors === undefined) {
      dispatch(setAlert('error', 'error'));
    } else {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Add Places
export const addPlaces = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      `${BASE_URL}/api/profile/places`,
      formData,
      config
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert(' New place added', 'success'));

    history.push('/dashboard');
  } catch (e) {
    const errors = e.response.data.msg;

    console.log(e.response);
    if (typeof errors === 'string') {
      dispatch(setAlert(errors, 'error'));
    }
    if (errors === undefined) {
      dispatch(setAlert('Enter a valid location', 'error'));
    } else {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//DELETE Places
export const deletePlace = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/profile/places/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Place Removed', 'success'));
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//DELETE Account & Profile

export const deleteAccount = () => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/api/profile`);
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: DELETE_ACCOUNT });
    dispatch(setAlert('Your account has been permanantly deleted', 'info'));
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};
