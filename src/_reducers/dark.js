/**
 * I have not implemented this yet but I will do in the future
 */
import { DARK_ON, DARK_OFF } from '../_actions/types';

const INITIAL_STATE = { dark: false };

export default function dark(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DARK_ON:
      return { ...state, dark: true };
    case DARK_OFF:
      return { ...state, dark: false };
    default:
      return state;
  }
}
