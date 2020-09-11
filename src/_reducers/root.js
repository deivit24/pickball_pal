import { combineReducers } from 'redux';
import alert from './alert';
import dark from './dark';
import auth from './auth';
import profile from './profile';
import post from './post';

const rootReducer = combineReducers({
  alert,
  dark,
  auth,
  profile,
  post,
});

export default rootReducer;
