/**
 * I have not implemented this yet but I will do in the future
 */

import { DARK_ON, DARK_OFF } from './types';

export const darkModeOn = () => {
  return {
    type: DARK_ON,
  };
};

export const darkModeOff = () => {
  return {
    type: DARK_OFF,
  };
};
