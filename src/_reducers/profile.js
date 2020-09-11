import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_MESSAGES,
  NEW_CONVERSATION,
  POST_MESSAGES,
} from '../_actions/types';

const INIT_STATE = {
  profile: null,
  profiles: [],
  messages: [],
  loading: true,
  error: {},
};

export default function (state = INIT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: payload,
        loading: false,
      };
    case POST_MESSAGES:
      return {
        ...state,
        messages: [payload, ...state.messages],
        loading: false,
      };
    case NEW_CONVERSATION:
      return {
        ...state,
        conversation: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        error: payload,
        loading: false,
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    default:
      return state;
  }
}
