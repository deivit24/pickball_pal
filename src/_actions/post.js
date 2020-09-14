import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_USER_POSTS,
} from './types';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/posts${window.location.search}`
    );
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

export const getUserPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/posts/user`);
    dispatch({
      type: GET_USER_POSTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.patch(`${BASE_URL}/api/posts/like/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.patch(`${BASE_URL}/api/posts/unlike/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/api/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    dispatch(setAlert('Post Removed', 'success'));
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/posts`, formData);
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(setAlert('Post Created', 'success'));
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Get Individual Post
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/posts/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Add comment

export const addComment = (postId, formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/posts/comment/${postId}`,
      formData
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(setAlert('Comment added', 'success'));
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Remove Comment

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/api/posts/comment/${postId}/${commentId}`);
    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });
    dispatch(setAlert('Comment deleted', 'info'));
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};
